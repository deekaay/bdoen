import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders }  from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {configState} from '../common/objdef/configstate.shape';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {execute_metastrategy} from '../common/executor';
import {ladder_result} from '../common/objdef/ladder_result.shape';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CalcerService {

  s : configState = { targetFailStacks: 1, metastrategy: [ ], maxAttempts: 1, numIterations: 1, ladder: [ ], ladderResults : [ ]  } ;
  constructor(private store$: Store<{ myConfigState: configState }>,
      private http : HttpClient) { 
       store$.select('myConfigState').subscribe( x => this.s = x );
      }

  runCalc() : Observable<Array<ladder_result>>
  {
    console.log('Run calc service');
    let x : Array<ladder_result> = execute_metastrategy(this.s); 
    return of(x);
  }  

}
