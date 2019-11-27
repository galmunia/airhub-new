
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing-module';



@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [
    UserManagementComponent
  ],

  providers: []
})
export class UserManagementModule {}