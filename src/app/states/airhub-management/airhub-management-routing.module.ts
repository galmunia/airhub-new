
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirhubManagementComponent } from './airhub-management.component';

const routes: Routes = [
  { path: '', component: AirhubManagementComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirhubManagementRoutingModule { }
