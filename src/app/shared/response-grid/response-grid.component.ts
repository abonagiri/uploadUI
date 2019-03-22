import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-response-grid',
  templateUrl: './response-grid.component.html',
  styleUrls: ['./response-grid.component.scss']
})
export class ResponseGridComponent implements OnInit {
  @Input()
  dataSource: any;
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  constructor() { }

  ngOnInit() {
    console.log(this.dataSource);
  }

}
