import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches :any =[]

  term:any
  
  constructor() { }

  ngOnInit(): void {
    this.matches = JSON.parse(localStorage.getItem('matches')|| '[]')
  }


  deleteMatchParent(id:any) {

    
    console.log('here into delete match Parent',id);

    for (let i = 0; i < this.matches.length; i++) {

      if (this.matches[i].id == id) {
        this.matches.splice(i, 1)
        localStorage.setItem('matches', JSON.stringify(this.matches))
        break

      }

    }
  }






}
