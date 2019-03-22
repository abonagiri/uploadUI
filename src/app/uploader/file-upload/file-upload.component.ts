import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  dataSource: any;
  showTable: boolean;
  constructor() { }

  ngOnInit() {
    this.dataSource = [];
    this.showTable = false;
  }

  handleFileUpload = (event: any) => {
    this.dataSource = event;
    this.showTable = true;
  }

}
