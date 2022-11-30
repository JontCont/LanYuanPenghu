import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomAComponent } from './room-a/room-a.component';
import { RoomBComponent } from './room-b/room-b.component';
import { RoomCComponent } from './room-c/room-c.component';
import { RoomMenuComponent } from './room-menu/room-menu.component';

const routes: Routes = [
  {
    path: '',
    component: RoomMenuComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'room-menu' },
      {
        path: 'room-a',
        component: RoomAComponent,
      },
      {
        path: 'room-b',
        component: RoomBComponent,
      },
      {
        path: 'room-c',
        component: RoomCComponent,
      },
      { path: '**', redirectTo: 'room-menu', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [
    RoomAComponent,
    RoomBComponent,
    RoomCComponent,
    RoomMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoomModule { }
