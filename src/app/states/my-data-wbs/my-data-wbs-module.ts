
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyDataWbsComponent } from './my-data-wbs.component';
import { MyDataWbsRoutingModule } from './my-data-wbs-routing-module';


@NgModule({
  imports: [
    CommonModule,
    MyDataWbsRoutingModule
  ],
  declarations: [
    MyDataWbsComponent
  ],

  providers: []
})
export class MyDataWbsModule {}