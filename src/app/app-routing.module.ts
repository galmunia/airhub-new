import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './states/home/home.module#HomeModule'
  },
  {
    path: 'airhub-management',
    loadChildren: './states/airhub-management/airhub-management.module#AirhubManagementModule'
  },
  {
    path: 'user-management',
    loadChildren: './states/user-management/user-management.module#UserManagementModule'
  },
  {
    path: 'my-team',
    loadChildren: './states/my-team/my-team.module#MyTeamModule'
  },
  {
    path: 'my-data',
    loadChildren: './states/my-data-wbs/my-data-wbs-module#MyDataWbsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
