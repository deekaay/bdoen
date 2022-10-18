import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders }  from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {configState} from '../common/objdef/configstate.shape';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {execute_metastrategy} from '../common/executor';
import {ladder_result} from '../common/objdef/ladder_result.shape';
import {of} from 'rxjs';
import {v4 as uuid} from 'uuid';
import {calcResult} from '../common/objdef/calcResult.shape';

@Injectable({
  providedIn: 'root'
})

export class CalcerService {

  s : configState = { targetFailStacks: 1, metastrategy: [ ], maxAttempts: 1, numIterations: 1, ladder: [ ], ladderResults : [ ], configVersion: uuid()  } ;
  constructor(private store$: Store<{ myConfigState: configState }>,
      private http : HttpClient) { 
       store$.select('myConfigState').subscribe( x => this.s = x );
      }

  runCalc() : Observable<calcResult>
  {
    console.log('Run calc service. Current version: ' + this.s.configVersion);
    let x : Array<ladder_result> = execute_metastrategy(this.s); 
    return of({ results: x, configVersion: this.s.configVersion } );
  }  

}
