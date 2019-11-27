
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyTeamComponent } from './my-team.component';
import { MyTeamRoutingModule } from './my-team-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MyTeamRoutingModule
  ],
  declarations: [
    MyTeamComponent
  ],

  providers: []
})
export class MyTeamModule {}