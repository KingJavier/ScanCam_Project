import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreoverifiexitoPage } from './correoverifiexito.page';

const routes: Routes = [
  {
    path: '',
    component: CorreoverifiexitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreoverifiexitoPageRoutingModule {}
