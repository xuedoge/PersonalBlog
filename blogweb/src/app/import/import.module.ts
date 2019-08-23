import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../pages/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ContentComponent } from '../pages/content/content.component';
import { ContentModule } from '../pages/content/content.module';
import { CommentComponent } from '../pages/comment/comment.component';
import { TextComponent } from '../pages/input/text/text.component';
import { TitleComponent } from '../pages/input/title/title.component';
import { ClassesComponent } from '../pages/input/classes/classes.component';
import { ShowmodalComponent } from '../pages/showmodal/showmodal.component';
import { NewcommentComponent } from '../pages/newcomment/newcomment.component';
//import { ClassService } from '../service/class/class.service';



@NgModule({
  declarations: [
    LayoutComponent,
    CommentComponent,
    TextComponent,
    TitleComponent,
    ClassesComponent,
    ShowmodalComponent,
    NewcommentComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ContentModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutComponent,
    ContentModule,
    CommentComponent,
    TextComponent,
    TitleComponent,
    ClassesComponent,
    ShowmodalComponent,
    NewcommentComponent
  ]
})
export class ImportModule { }
