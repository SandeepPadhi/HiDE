export class NotificationInvite {
  from: string;
  message: string;
  inviteLink: string;
  status: string;
  projectid: string;

  constructor(from: string, message: string, inviteLink: string, status: string, projectid: string) {
    this.from = from;
    this.message = message;
    this.inviteLink = inviteLink;
    this.status = status;
    this.projectid = projectid;
  }
}
