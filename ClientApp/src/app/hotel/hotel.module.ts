import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    NewsComponent,
    AboutComponent,
    RoomsComponent,
    HomeComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
