import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  titre :string ='Contact 1'

  count : number = 0

  path : string ='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'


  disabled :boolean=true

  constructor() { }

  ngOnInit(): void {
  }


  setCount(data:any){

console.log('here into setCount',data);
    

  }

 


  

}



