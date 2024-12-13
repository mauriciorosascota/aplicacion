import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post3PageRoutingModule } from './post3-routing.module';

import { Post3Page } from './post3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post3PageRoutingModule
  ],
  declarations: [Post3Page]
})
export class Post3PageModule {}
