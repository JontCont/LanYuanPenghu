import { HotelComponent } from './hotel.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { HeaderV1Component } from './shared/header-v1/header-v1.component';
import { FooterV1Component } from './shared/footer-v1/footer-v1.component';
import { MenuV1Component } from './shared/menu-v1/menu-v1.component';


@NgModule({
  declarations: [
    NewsComponent,
    AboutComponent,
    RoomsComponent,
    PhotoComponent,
    //以下必要存在
    HotelComponent,
    HomeComponent,
    HeaderV1Component,
    FooterV1Component,
    MenuV1Component,
    //以上必要存在
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule
  ]
})
export class HotelModule { }
