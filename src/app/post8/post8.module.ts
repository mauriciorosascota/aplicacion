import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post8PageRoutingModule } from './post8-routing.module';

import { Post8Page } from './post8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post8PageRoutingModule
  ],
  declarations: [Post8Page]
})
export class Post8PageModule {}
