import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title='BonJoUr'

  currentDate = Date.now()
  weather :any= {}
  icon =""
  constructor(private userService :UsersService) { }

  ngOnInit(): void {
    this.userService.getweatherData().subscribe((result)=>{
      this.weather=result
      this.icon= `https://openweathermap.org/img/wn/${ result.weather[0].icon}@2x.png`
    })
  }





}
