import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreoverifiexitoPageRoutingModule } from './correoverifiexito-routing.module';

import { CorreoverifiexitoPage } from './correoverifiexito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoverifiexitoPageRoutingModule
  ],
  declarations: [CorreoverifiexitoPage]
})
export class CorreoverifiexitoPageModule {}
