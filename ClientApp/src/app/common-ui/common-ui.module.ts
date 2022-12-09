import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    SlidesComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [SlidesComponent]
})
export class CommonUiModule { }
