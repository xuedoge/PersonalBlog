import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TestModule } from './pages/test/test.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MainModule } from './pages/main/main.module';
import { ContentModule } from './pages/content/content.module';
import { TitleComponent } from './pages/input/title/title.component';
import { ClassesComponent } from './pages/input/classes/classes.component';
import { ShowmodalComponent } from './pages/showmodal/showmodal.component';
import { ImportModule } from './import/import.module';
import { NewcommentComponent } from './pages/newcomment/newcomment.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TestModule,
    MainModule,
    ContentModule

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],

})
export class AppModule { }
