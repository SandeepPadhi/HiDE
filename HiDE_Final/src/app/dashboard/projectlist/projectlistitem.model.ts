export class ProjectListItem {
  title: string;
  description: string;
  status: string;
  startdate: string;
  deadline: string;
  members: string[];
  leader: string;
  projectid: string;

  constructor(
    title: string,
    description: string,
    status: string,
    startdate: string,
    deadline: string,
    members: string[],
    leader: string,
    projectid: string) {

    this.title = title;
    this.description = description;
    this.status = status;
    this.startdate = startdate;
    this.deadline = deadline;
    this.members = members;
    this.leader = leader;
    this.projectid = projectid;
  }
}
