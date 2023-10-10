import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewsModule } from './views.module';
import { HotelRoutingModule } from './hotel/hotel-routing.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'hotel', loadChildren: () => HotelRoutingModule },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), CommonModule, ViewsModule],
})
export class ViewsRoutingModule {}
