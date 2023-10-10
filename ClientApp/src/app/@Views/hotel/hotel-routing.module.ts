import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';
import { NewsComponent } from './news/news.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { HotelComponent } from './hotel.component';
import { HotelModule } from './hotel.module';

const routes: Routes = [
  {
    path: '',
    component: HotelComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'photo', component: PhotoComponent },
      { path: 'news', component: NewsComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'specialty', component: SpecialtyComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
