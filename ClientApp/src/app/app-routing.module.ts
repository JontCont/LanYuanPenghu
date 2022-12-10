import { NewsComponent } from './root/news/news.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-page/front-page.module').then(m => m.FrontPageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./root/root.module').then(m => m.RootModule)
  },
  // { path: '', redirectTo: '/front', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
