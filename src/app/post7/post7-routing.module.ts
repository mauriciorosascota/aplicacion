import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post7Page } from './post7.page';

const routes: Routes = [
  {
    path: '',
    component: Post7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post7PageRoutingModule {}
