import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './index/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'room',
    loadChildren: () =>
      import('./room/room.module').then((m) => m.RoomModule),
  },
  {
    path: 'photo',
    loadChildren: () =>
      import('./photo/photo.module').then((m) => m.PhotoModule),
  },
  { path: '**', component: HomeComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
