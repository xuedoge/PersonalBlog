import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { MainModule } from '../main/main.module';
import { MainComponent } from '../main/main.component';
import { ImportModule } from 'src/app/import/import.module';



@NgModule({
  declarations: [TestComponent,
  ],
  imports: [
    CommonModule,
    ImportModule
  ]
})
export class TestModule { }
