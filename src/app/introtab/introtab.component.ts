import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {testConfigState} from '../configstate/configstate.actions';
import {configState} from '../objdef/configstate.shape';
import {Rung} from '../objdef/rung.shape';

@Component({
  selector: 'introtab-component',
  templateUrl: './introtab.component.html',
  styleUrls: ['./introtab.component.css']
})
export class IntrotabComponent implements OnInit {
    configState$ : Observable<configState>;

  constructor(private store: Store<{ myConfigState: configState }>)  { 
    this.configState$ = store.select('myConfigState');
    console.log('INit');

  }

  ngOnInit(): void {
  }

updateConfig() {
  console.log('updatedConfig function');
  this.store.dispatch(testConfigState());
  console.log(this.configState$);
}

}
