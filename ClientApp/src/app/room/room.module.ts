import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomMenuComponent } from './room-menu/room-menu.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    RoomMenuComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule
  ],
  exports: [RouterModule]
})
export class RoomModule { }
