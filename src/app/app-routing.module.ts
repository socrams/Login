import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { CanActivate } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( (m) => m.LoginPageModule),
    
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( (m) => m.RegisterPageModule),

  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( (m) => m.HomePageModule),
    
  },
  {
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
