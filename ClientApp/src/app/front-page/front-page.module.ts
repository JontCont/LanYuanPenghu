import { FrontPageComponent } from './front-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    FormsModule
  ]
})
export class FrontPageModule { }
