import { Component, Input, OnInit } from '@angular/core';
import {configState} from '../objdef/configstate.shape';
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs';
import {Rung} from '../objdef/rung.shape';
import {Strategy} from '../objdef/strategy.shape';
import {allstrats} from '../strategies/strategies';

@Component({
  selector: 'rung-panel',
  templateUrl: './rungpanel.component.html',
  styleUrls: ['./rungpanel.component.css']

})
export class RungpanelComponent implements OnInit {

  configState$ : Observable<configState>;
  @Input() indexNum : number = -1;
  @Input() rungContent : Rung = new Rung();

  constructor(private store: Store<{ myConfigState: configState }>)  { 
    this.configState$ = store.select('myConfigState');
    this.configState$.subscribe( data => { console.log(data); this.rungContent = data.ladder[this.indexNum]; } ) ;
    console.log('INit');

  }

  ngOnInit(): void {
  }

  getViableStrategies() : Array<Strategy> 
    { 
    return allstrats.filter( x => x.minuse <= this.rungContent.startfs && x.maxuse >= this.rungContent.startfs  && 
        (this.rungContent.strategy.indexOf(x.id) == this.indexNum || this.rungContent.strategy.indexOf(x.id) < 0 ));
    }

}
