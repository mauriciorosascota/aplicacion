import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post3Page } from './post3.page';

const routes: Routes = [
  {
    path: '',
    component: Post3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post3PageRoutingModule {}
