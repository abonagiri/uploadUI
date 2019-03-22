import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';



@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  @Output()
  fileResponse: EventEmitter<any> = new EventEmitter<any>();
  file: any;
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(fileList: FileList) {
    console.log(fileList);
    this.file = fileList.item(0);
  }

  uploadFile() {
    this.fileUploadService.uploadFile(this.file)
    .subscribe((data) => {
      this.fileResponse.emit(data);
    });
  }

}
