import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessBarModule } from './@Shared/process-bar/process-bar.module';

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ProcessBarModule,
    ]
})
export class AppModule { }
