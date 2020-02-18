# HiDE
#This is my final Year Project
Title:Hybrid Development Environment

Summary:
The proposed system is a cloud based Integrated Development Environment. The project will enable its users to create workspace, edit code, save, run and develop their projects online. The platform will take care of all the dependencies required for the project development requirement. The user will have access to the command line with restricted access as per the project need. The platform will have good UI to help user to carry out various tasks on the platform like conventional IDE viz. VSCode. Being a cloud project, it will help users to have real time collaboration on a project similar to google docs. The project will also have chat features such as text chat and optional voice chat. The user will be privileged to create and manage project similar to offline IDEs like VSCode. The platform will also feature user to run and test Tensorflow.js models on the cloud. The platform will enable user to do projects using C, C++, C#, Java, Python, HTML, CSS, JavaScript etc. The project will demonstrate some aspects of visual scripting where blocks of code can be converted to C or Java. One additional feature will be that to reduce the cost of the storage, the project will enable user to store all their files in their google drive and that will be synced to the platform whenever user logs into the platform.



finaldemofinal.html is the main web page displaying main UI
login.html is for signup page

serverCfinal.js is the main server

Only serverCfinal.js needs to be run.
Take care of port nos and ip addresses ..change  it as per your requirement

Try running the app directly and see its functioning

hello.c are created by the server during compilation process when user wants to compile a C code.For java and python similar files are present.

Others files are created by me during external evaluation to show file creation.


####Database#####
The app uses mysql

Inside Database name HIDE ,there is a table called Files
Table Files have  two columns  email   and  filename   .
Few entries in my databases aree:

mysql> select * from Files;
+----------------------------+------------------+
| email                      | filename         |
+----------------------------+------------------+
| padhisandeep96@gmail.com   | file1.py         |
| padhisandeep96@gmail.com   | file2.py         |
| bharavi15@gmail.com        | file2.py         |
| bharavi15@gmail.com        | file3.py         |
| padhisandeep96@gmail.com   | firstfile.py     |
| padhisandeep96@gmail.com   | secondfile.py    |
| bharavi15@gmail.com        | secondfile.py    |
| bharavi15@gmail.com        | thirdfile.py     |
| padhisandeep96@gmail.com   | thirdfile.py     |
| bharavi15@gmail.com        | thirdfile.py     |
| padhisandeep96@gmail.com   | thirdfile.py     |
| padhisandeep96@gmail.com   | 4file.py         |
| saurabhbhagatdie@gmail.com | 4file.py         |
| undefined                  | myfirst.py       |
| padhisandeep96@gmail.com   | myfirst.py       |
| padhisandeep96@gmail.com   | fifth.py         |
| bharavi15@gmail.com        | fifth.py         |
| undefined                  | second.py        |
| saurabhbhagatdie@gmail.com | second.py        |
| saurabhagatdie@gmail.com   | saurabhfile.py   |
| padhisandeep96@gmail.com   | saurabhfile.py   |
| saurabhagatdie@gmail.com   | firstc.c         |
| padhisandeep96@gmail.com   | firstc.c         |
| prashant@gmail.com         | prashantfirst.py |
| padhisandeep96@gmail.com   | prashantfirst.py |
| padhisandeep96@gmail.com   | Pm.java          |
| prashant@gmail.com         | Pm.java          |
| padhisandeep96@gmail.com   | bharavi1.py      |
| bharavi15@gmail.com        | bharavi1.py      |
| undefined                  | projectfirst.py  |
| padhisandeep96@gmail.com   | projectfirst.py  |
+----------------------------+------------------+





