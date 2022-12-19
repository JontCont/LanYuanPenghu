import { HotelComponent } from './hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HotelComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'photo', loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule) },
      { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
      { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule) },
      { path: 'specialty', loadChildren: () => import('./specialty/specialty.module').then(m => m.SpecialtyModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
