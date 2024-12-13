import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post5PageRoutingModule } from './post5-routing.module';

import { Post5Page } from './post5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post5PageRoutingModule
  ],
  declarations: [Post5Page]
})
export class Post5PageModule {}
