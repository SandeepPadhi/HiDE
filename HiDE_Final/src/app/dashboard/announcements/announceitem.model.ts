export class AnnounceItem {
  from: string;
  project: string;
  message: string;
  date: string;
  time: string;

  constructor(from: string, project: string, message: string, date: string, time: string) {
    this.from = from;
    this.project = project;
    this.message = message;
    this.date = date;
    this.time = time;
  }
}
