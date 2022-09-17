import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {updateConfigState, updateSingleProp} from '../configstate/configstate.actions';
import {configState} from '../objdef/configstate.shape';
import {FormGroup} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {allstrats} from '../strategies/strategies';

@Component({
  selector: 'configtab-component',
  templateUrl: './configtab.component.html',
  styleUrls: ['./configtab.component.css']
})
export class ConfigtabComponent implements OnInit {

  configState$ : Observable<configState>;
  metaconfig = new FormGroup ({ 

    
  });

  constructor(private store: Store<{ myConfigState: configState }>)  { 
    this.configState$ = store.select('myConfigState');
    console.log('INit');

  }

  ngOnInit(): void {
  }

updateConfig() {
  console.log('updatedConfig function');
  //this.store.dispatch(updateConfigState({ args : { targetFailStacks : 41 } } ))
  console.log(this.configState$);
}

metaConfigChange(event: any) {
  var o: Object;
  console.log('Changing ' + event.target.id + ' to ' + event.target.value);
  o = { };
  var p: string = event.target.id.toString();
  o[p as keyof typeof o] = event.target.value;
  this.store.dispatch(updateSingleProp ({ args : o }));
}

}
