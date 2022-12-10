import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomMenuComponent } from './room-menu/room-menu.component';

const routes: Routes = [
  {
    path: '',
    component: RoomMenuComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'room-menu' },
      { path: '**', redirectTo: 'room-menu', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
