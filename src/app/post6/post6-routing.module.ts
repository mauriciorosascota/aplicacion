import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post6Page } from './post6.page';

const routes: Routes = [
  {
    path: '',
    component: Post6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post6PageRoutingModule {}
