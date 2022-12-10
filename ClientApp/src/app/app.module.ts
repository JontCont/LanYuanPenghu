import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessBarComponent } from './@Shared/process-bar/process-bar.component';
import { ProcessBarModule } from './@Shared/process-bar/process-bar.module';
import { HomeComponent } from './root/home/home.component';
import { NewsComponent } from './root/news/news.component';
import { PhotoComponent } from './root/photo/photo.component';
import { RoomsComponent } from './root/rooms/rooms.component';
import { RootComponent } from './root/root.component';
import { AboutComponent } from './root/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessBarComponent,
    HomeComponent,
    NewsComponent,
    PhotoComponent,
    RoomsComponent,
    AboutComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ProcessBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
