import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.loginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'pelicula-drive',
    loadChildren: () => import('./post/post.module').then(m => m.PostPageModule)
  },
  {
    path: 'pelicula-inception',
    loadChildren: () => import('./post2/post2.module').then(m => m.Post2PageModule)
  },
  {
    path: 'pelicula-interstellar',
    loadChildren: () => import('./post3/post3.module').then(m => m.Post3PageModule)
  },
  {
    path: 'pelicula-La La Land', 
    loadChildren: () => import('./post4/post4.module').then(m => m.Post4PageModule)
  },
  {
    path: 'pelicula-Crazy, Stupid, Love.', 
    loadChildren: () => import('./post5/post5.module').then(m => m.Post5PageModule)
  },
  {
    path: 'pelicula-Oppenheimer', 
    loadChildren: () => import('./post6/post6.module').then(m => m.Post6PageModule)
  },
  {
    path: 'pelicula-The Pianist', 
    loadChildren: () => import('./post7/post7.module').then(m => m.Post7PageModule)
  },
  {
    path: 'pelicula-Sound Of Metal', 
    loadChildren: () => import('./post8/post8.module').then(m => m.Post8PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

