import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post6PageRoutingModule } from './post6-routing.module';

import { Post6Page } from './post6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post6PageRoutingModule
  ],
  declarations: [Post6Page]
})
export class Post6PageModule {}
