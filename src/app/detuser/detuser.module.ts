import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetuserPageRoutingModule } from './detuser-routing.module';

import { DetuserPage } from './detuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetuserPageRoutingModule
  ],
  declarations: [DetuserPage]
})
export class DetuserPageModule {}
