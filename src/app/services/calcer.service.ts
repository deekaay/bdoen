import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders }  from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {configState} from '../common/objdef/configstate.shape';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {execute_metastrategy} from '../common/executor.js';

@Injectable({
  providedIn: 'root'
})

export class CalcerService {

  s : configState = { targetFailStacks: 1, metastrategy: [ ], maxAttempts: 1, numIterations: 1, ladder: [ ] } ;
  constructor(private store$: Store<{ myConfigState: configState }>,
      private http : HttpClient) { 
       store$.select('myConfigState').pipe(take(1)).subscribe( x => this.s = x );
      }

  runCalc() : Observable<any>
  {
    console.log('Run calc service');
    execute_metastrategy(this.s); 
    return from([1,2,3]);
  }  

}
