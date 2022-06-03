import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullemailPageRoutingModule } from './fullemail-routing.module';

import { FullemailPage } from './fullemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullemailPageRoutingModule
  ],
  declarations: [FullemailPage]
})
export class FullemailPageModule {}
