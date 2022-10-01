import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntrotabComponent } from './introtab/introtab.component';

import { StoreModule } from '@ngrx/store';
import {configReducer} from './configstate/configstate.reducer';
import { ConfigtabComponent } from './configtab/configtab.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RungpanelComponent } from './rungpanel/rungpanel.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { LadderpanelComponent } from './ladderpanel/ladderpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    IntrotabComponent,
    ConfigtabComponent,
    RungpanelComponent,
    LadderpanelComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ myConfigState : configReducer }),
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ 
      maxAge: 25,
      autoPause: true
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
