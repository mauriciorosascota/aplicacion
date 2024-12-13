import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post5Page } from './post5.page';

const routes: Routes = [
  {
    path: '',
    component: Post5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post5PageRoutingModule {}
