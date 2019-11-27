
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDataWbsComponent } from './my-data-wbs.component';

const routes: Routes = [
  { path: '', component: MyDataWbsComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDataWbsRoutingModule { }
