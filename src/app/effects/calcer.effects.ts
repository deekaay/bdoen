
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { CalcerService } from '../services/calcer.service';
import {EMPTY} from 'rxjs';
import {catchError, map, mergeMap } from 'rxjs/operators';
import {createAction} from '@ngrx/store';
import {of} from 'rxjs';

@Injectable()
export class CalcerEffects {

    runSimulation$ = createEffect(() => this.actions$.pipe(
        ofType('Start Simultation'),
        mergeMap(() => this.calcerService.runCalc()
        .pipe(
            //map(x => ({ type : 'Simulation Result Received', payload: x })),
            map( x => ({type: 'Simulation Result Received', payload: x }  ) ),
            catchError(err => { return of( { type : 'Simulation result error', payload: err  }); } )
            ))
        )
        );


  constructor(
    private actions$: Actions, // this is an RxJS stream of all actions
    private calcerService: CalcerService // we will need this service for API calls
  ) {}
}