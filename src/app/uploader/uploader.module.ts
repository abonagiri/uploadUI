import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
  ], exports: [FileUploadComponent]
})
export class UploaderModule { }
