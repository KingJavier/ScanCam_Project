import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoverifierrorPageRoutingModule } from './correoverifierror-routing.module';

import { CorreoverifierrorPage } from './correoverifierror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoverifierrorPageRoutingModule
  ],
  declarations: [CorreoverifierrorPage]
})
export class CorreoverifierrorPageModule {}
