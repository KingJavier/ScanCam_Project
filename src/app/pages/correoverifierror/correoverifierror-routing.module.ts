import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreoverifierrorPage } from './correoverifierror.page';

const routes: Routes = [
  {
    path: '',
    component: CorreoverifierrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreoverifierrorPageRoutingModule {}
