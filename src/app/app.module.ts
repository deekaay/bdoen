import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntrotabComponent } from './introtab/introtab.component';

import { StoreModule } from '@ngrx/store';
import {configReducer} from './configstate/configstate.reducer';
import { ConfigtabComponent } from './configtab/configtab.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IntrotabComponent,
    ConfigtabComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ myConfigState : configReducer }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
