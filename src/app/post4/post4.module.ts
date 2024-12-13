import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post4PageRoutingModule } from './post4-routing.module';

import { Post4Page } from './post4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post4PageRoutingModule
  ],
  declarations: [Post4Page]
})
export class Post4PageModule {}
