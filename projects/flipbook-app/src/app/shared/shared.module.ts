import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SampleTableComponent } from './sample-table/sample-table.component';
@NgModule({
  declarations: [
    SampleTableComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SampleTableComponent
  ]
})
export class SharedModule { }
