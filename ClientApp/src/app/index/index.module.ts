import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonUiModule } from "../common-ui/common-ui.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    CommonUiModule
  ]
})
export class IndexModule { }
