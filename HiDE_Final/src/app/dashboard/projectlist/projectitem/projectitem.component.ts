import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectitem',
  templateUrl: './projectitem.component.html',
  styleUrls: ['./projectitem.component.css']
})
export class ProjectitemComponent implements OnInit {

  @Input() projectTitle = '';
  @Input() projectDesc = '';
  @Input() projectStatus = '';
  @Input() projectStart = '';
  @Input() projectDead = '';

  constructor() { }

  ngOnInit() {
  }

  statusBackColor() {
    if (this.projectStatus === 'active') {
      return '#7FFF00';
    } else if (this.projectStatus === 'complete') {
      return '#FFA500';
    } else {
      return '#ff3232';
    }
  }
}
