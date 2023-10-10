import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewsModule } from './views.module';

const routes: Routes = [
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), CommonModule, ViewsModule],
})
export class ViewsRoutingModule {}
