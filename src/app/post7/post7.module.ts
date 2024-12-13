import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post7PageRoutingModule } from './post7-routing.module';

import { Post7Page } from './post7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post7PageRoutingModule
  ],
  declarations: [Post7Page]
})
export class Post7PageModule {}
