import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post2PageRoutingModule } from './post2-routing.module';

import { Post2Page } from './post2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post2PageRoutingModule
  ],
  declarations: [Post2Page]
})
export class Post2PageModule {}
