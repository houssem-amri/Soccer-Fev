import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any=[]
  data :any={
    min:0,
    max:0
  }
  constructor(private pService:PlayersService) { }

  ngOnInit(): void {
    this.getAllPlayers()
  }

  getAllPlayers(){
    this.pService.getAllPlayers().subscribe((res)=>{
      this.players=res.data
    })
  }

  filterPlayer(){
    this.pService.filterPlayer(this.data).subscribe((result)=>{
      this.players=result.data
    })
    
  }

}
