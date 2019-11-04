import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimelineComponent} from './timeline/timeline.component';
import {PreviewComponent} from './preview/preview.component';
import {PanelRoutingModule} from './panel-routing.module';


@NgModule({
  declarations: [
    TimelineComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule {
}
