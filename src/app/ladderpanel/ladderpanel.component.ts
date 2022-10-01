import { Component, OnInit, Input } from '@angular/core';
import {configState} from '../objdef/configstate.shape';
import {Store} from '@ngrx/store';
import {Rung} from '../objdef/rung.shape';

@Component({
  selector: 'ladder-panel',
  templateUrl: './ladderpanel.component.html',
  styleUrls: ['./ladderpanel.component.css']
})
export class LadderpanelComponent implements OnInit {

  @Input() ladder : Array<Rung> = [ ];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
