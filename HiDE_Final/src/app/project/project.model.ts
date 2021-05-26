export class ProjectInfo {
  projectid: string;
  projectTitle: string;
  projectDesc: string;
  projectDeadline: string;
  projectStartdate: string;
  leader: string;
  members: any;
  status: string;

  constructor(
    projectid: string,
    projectTitle: string,
    projectDesc: string,
    projectDeadline: string,
    projectStartdate: string,
    leader: string,
    members: any,
    status: string
  ) {

    this.projectid = projectid;
    this.projectTitle = projectTitle;
    this.projectDesc = projectDesc;
    this.projectDeadline = projectDeadline;
    this.projectStartdate = projectStartdate;
    this.leader = leader;
    this.members = members;
    this.status = status;
  }
}
