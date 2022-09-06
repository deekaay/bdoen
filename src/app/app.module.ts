import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntrotabComponent } from './introtab/introtab.component';

import { StoreModule } from '@ngrx/store';
import {configReducer} from './configstate/configstate.reducer';


@NgModule({
  declarations: [
    AppComponent,
    IntrotabComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ myConfigState : configReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
