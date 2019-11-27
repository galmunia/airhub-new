
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AirhubManagementComponent } from './airhub-management.component';
import { AirhubManagementRoutingModule } from './airhub-management-routing.module';



@NgModule({
  imports: [
    CommonModule,
    AirhubManagementRoutingModule
  ],
  declarations: [
    AirhubManagementComponent
  ],

  providers: []
})
export class AirhubManagementModule {}