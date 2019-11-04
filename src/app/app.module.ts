import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularHelpComponent} from './angular-help/angular-help.component';

import {AuthModule} from './auth/auth.module';
import {PanelModule} from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelpComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    PanelModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
