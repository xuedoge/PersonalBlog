import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ImportModule } from 'src/app/import/import.module';
import { CommentComponent } from '../comment/comment.component';



@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule

  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
