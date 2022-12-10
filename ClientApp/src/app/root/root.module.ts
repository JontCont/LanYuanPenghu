import { FormsModule } from '@angular/forms';
import { RootComponent } from './root.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RootComponent,
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    FormsModule
  ]
})
export class RootModule { }
