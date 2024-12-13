import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post2Page } from './post2.page';

const routes: Routes = [
  {
    path: '',
    component: Post2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post2PageRoutingModule {}
