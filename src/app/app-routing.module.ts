import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AngularHelpComponent} from './angular-help/angular-help.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'timeline',
    loadChildren: () => import('./panel/panel.module').then(mod => mod.PanelModule)
  },
  {
    path: 'help',
    component: AngularHelpComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'timeline'
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
