import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post4Page } from './post4.page';

const routes: Routes = [
  {
    path: '',
    component: Post4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post4PageRoutingModule {}
