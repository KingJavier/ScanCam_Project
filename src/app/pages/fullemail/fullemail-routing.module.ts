import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullemailPage } from './fullemail.page';

const routes: Routes = [
  {
    path: '',
    component: FullemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullemailPageRoutingModule {}
