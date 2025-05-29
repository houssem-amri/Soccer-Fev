import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match: any = {}

  @Output() passIdMatch : EventEmitter <any> = new EventEmitter 

  constructor() { }

  ngOnInit(): void {
  }

  deleteMatchChild() {

    console.log('here into delete match child');
    
    this.passIdMatch.emit(this.match.id)
 
  }

}
