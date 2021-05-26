const express = require('express');
var path = require("path");
const bodyParser = require('body-parser');
const app = express();
var firebase = require('firebase-admin');
var serverFunctions = require('./server').serverFunctions;

var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

firebase.initializeApp({
  credential: firebase.credential.cert('firebaseKey.json'),
  databaseURL: "https://hide-9d4ce.firebaseio.com",
  storageBucket: 'hide-9d4ce.appspot.com'
});
var storage = require('@google-cloud/storage');
var bucket = firebase.storage().bucket();
app.use(bodyParser.json());

// API routes should be here

app.route('/api/getmembers').get( (req, res) => {
  if (req.query.search && req.query.search != '') {
    var uids = [];
    var usernames = [];
    var imgUrls = [];
    var result = [];
    var getpromises = [];
    firebase.database().ref('userdata').once('value', (snapshot) => {
      snapshot = snapshot.val();
      for (var i = 0 ; i < Object.keys(snapshot).length ; i++) {
        if (snapshot[Object.keys(snapshot)[i]].username.includes(req.query.search)) {
          uids.push(Object.keys(snapshot)[i]);
          usernames.push(snapshot[Object.keys(snapshot)[i]].username);
          result.push(
            {
              username: snapshot[Object.keys(snapshot)[i]].username,
              imgUrl: ''
            });
        }
      }
    })
    .then( (response) => {
      for(var i = 0 ; i < uids.length ; i++) {
        getpromises.push(
          bucket.file(uids[i].toString() + '/profile.jpg').getSignedUrl(
            {
              action: 'read',
              expires: '03-09-2100'
            })
            .then( (urls) => {
              imgUrls.push(urls[0]);
            })
            .catch( (error) => {
              console.log(error);
              imgUrls.push('');
            })
        );
      }
      Promise.all(getpromises)
        .then( () => {
          for(var i = 0 ; i < result.length ; i++) {
            result[i].imgUrl = imgUrls[i];
          }
          return res.send(JSON.stringify(
            {
              message: 'Success',
              members: result
            })
          );
        })
        .catch( (error) => {
          console.log(error);
          return res.json(
            {
              message: 'Error',
              members: null
            });
        })

    });
  } else {
    return res.json(
      {
        message: 'Error',
        members: null
      });
  }
});

app.route('/api/newproject').post( (req, res) => {
  var members = req.body.members;
  var projectid = req.body.projectid;
  var projectpass = req.body.projectPass;
  var leader = req.body.leader;
  var getpromises = [];
  var inviteLinks = [];
  inviteLinkCounter1 = 0;
  inviteLinkCounter2 = 0;

  for (var username of members) {
    inviteLinks.push(getUniqueString(40));
  }

  for (var username of members) {
    getpromises.push(
      firebase.database().ref('uids').child(username).once('value', (uid) => {
        uid = uid.val();
        if (uid) {
          firebase.database().ref('userdata/' + uid + '/notifications').once('value', (snap) => {
            snap = snap.val();
            if (snap == null || snap == 'undefined') {
              snap = {};
            }
            firebase.database().ref('userdata/' + uid + '/notifications/' + Object.keys(snap).length).set({
              expired: false,
              from: leader,
              inviteLink: inviteLinks[inviteLinkCounter1],
              message: '',
              status: 'unread',
              type: 'invite',
              projectid: projectid
            });
            inviteLinkCounter1 += 1;
          });
        }
      })
    );

    serverFunctions.notifyInvite(username, leader, '', inviteLinks[inviteLinkCounter2], 'unread', projectid);
    inviteLinkCounter2 += 1;
  }

  Promise.all(getpromises)
  .then( () => {
    serverFunctions.createProjectAccount(projectid, projectpass).then((status) => {
      if(status) {
        return res.json(
          {
            message: 'Success'
          }
        );
      } else return res.json({
        message: 'Failed'
      });
    });
  })
  .catch( (error) => {
    console.log(error);
    return res.json(
      {
        message: 'Falied'
      }
    );
  });
});

app.route('/api/acceptinvite').post( (req, res) => {
  var inviteLinkReceived = req.body.inviteLink;
  var projectid = req.body.projectid;
  var username = req.body.username;
  var notificationIndex = -1;
  var message = '';

  firebase.database().ref('uids').child(username).once('value', (uid) => {
    uid = uid.val();
    if (uid) {
      firebase.database().ref('userdata/' + uid + '/notifications').once('value', (snapshot) => {
        if (snapshot.val()) {
          notifications = snapshot.val();
          doesExist = false;
          for (var i = 0 ; i < notifications.length ; i++) {
            if (notifications[i]['inviteLink'] === inviteLinkReceived) {
              notificationIndex = i;
              doesExist = true;
            }
          }
          if (!doesExist) {
            return res.json(
              {
                message: 'false-Invalid Invite Link'
              });
          }
          for (var i = 0 ; i < notifications.length ; i++) {
            if (notifications[i]['inviteLink'] === inviteLinkReceived) {
              if (notifications[i]['expired'] === false) {
                firebase.database().ref('dashboarddata/' + uid + '/projectlist').once('value', (snap) => {
                  var projectlist = snap.val();
                  if (projectlist == null) {
                    projectlist = [];
                  }
                  firebase.database().ref('userdata/' + uid + '/notifications/' + notificationIndex).child('expired').set('true');
                  firebase.database().ref('dashboarddata/' + uid + '/projectlist').update(
                    {
                      [projectlist.length]: projectid
                    })
                    .then( () => {
                      return res.json(
                        {
                          message: 'true-Accepted'
                        });
                    });
                });
              } else {
                return res.json(
                  {
                    message: 'false-Invite Link Expired'
                  });
              }
            }
          }
        }
      });
    }
  })
});

app.route('/api/getmemberavatars').get( (req, res) => {
  var members = JSON.parse(req.query.members);
  var uids = [];
  var getpromises1 = [];
  var getpromises2 = [];
  var imgUrls = [];
  var memberNames = [];

  for (var member of members) {
    memberNames.push(member);
    getpromises1.push(
      firebase.database().ref('uids').child(member).once('value', (uid) => {
        if (uid.val()) {
          uid = uid.val();
          uids.push(uid);
        }
      })
      .catch( (error) => {
        console.log(error);
        uids.push('');
      })
    );
  }

  Promise.all(getpromises1)
  .then( () => {
    for (var i = 0 ; i < uids.length ; i++) {
      getpromises2.push(
        bucket.file(uids[i].toString() + '/profile.jpg').getSignedUrl(
          {
            action: 'read',
            expires: '03-09-2100'
          })
          .then( (urls) => {
            imgUrls.push(urls[0]);
          })
          .catch( (error) => {
            console.log(error);
            imgUrls.push('');
          })
      );
    }

    Promise.all(getpromises2)
    .then( () => {
      var membersWithAvatars = {};
      for (var i = 0 ; i < memberNames.length ; i++) {
        membersWithAvatars[memberNames[i]] = imgUrls[i];
      }
      res.json(
      {
        message: 'true-Success',
        members: membersWithAvatars
      });
    })
    .catch( (error) => {
      console.log(error);
      res.json(
        {
          message: 'false-Failed'
        });
    });
  })
  .catch( (error) => {
    console.log(error);
    res.json(
      {
        message: 'false-Failed'
      });
  });
});

app.route('/api/getconsolecred').post( (req, res) => {
  var projectid = req.body.projectid;

  firebase.database().ref('projects/' + projectid).once('value', (snapshot) => {
    snapshot = snapshot.val();
    res.json({
      username: snapshot.projectid,
      password: snapshot.projectPassword
    });
  })
  .catch((error) => {
    console.log(error);
    res.json({username: null, password: null});
  });;
});

// API Routes End

app.use(express.static(__dirname + '/client'));
app.route('/*').get(function(req, res) {
  return res.sendFile(path.join(__dirname, 'client/index.html'));
});

module.exports.app = app;
module.exports.firebase = firebase;

function getUniqueString(length) {
  let unique = '';
  for (var i = 0 ; i < length ; i++) {
    unique += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return unique;
}
