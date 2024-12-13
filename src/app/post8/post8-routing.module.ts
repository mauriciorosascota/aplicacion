import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post8Page } from './post8.page';

const routes: Routes = [
  {
    path: '',
    component: Post8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post8PageRoutingModule {}
