import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AppComponent
} from './app.component';
import {
  IndexComponent
} from './components/index/index.component';
/*Routing*/
import {
  rootRouting
} from './components/root.route.component';

@NgModule({
  imports       : [
    BrowserModule,
    rootRouting
  ],
  declarations  : [
    AppComponent,
    IndexComponent
  ],
  bootstrap     : [AppComponent]
})
export class AppModule {}
