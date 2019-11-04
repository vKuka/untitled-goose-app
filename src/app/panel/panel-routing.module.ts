import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TimelineComponent} from './timeline/timeline.component';
import {PreviewComponent} from './preview/preview.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [{
  path: '',
  component: TimelineComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: ':imgId',
      component: PreviewComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule {
}
