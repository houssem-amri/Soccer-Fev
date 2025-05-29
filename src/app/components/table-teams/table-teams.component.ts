import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css']
})
export class TableTeamsComponent implements OnInit {


  teams:any=[]
  constructor(private tservice:TeamsService , private _router:Router) { }

  ngOnInit(): void {

    this.getAllTeams()
  }


  getAllTeams(){

    this.tservice.getAllTeams().subscribe((res)=>{
      this.teams=res.data
    })
  }


  deleteTeam(id:any){

    this.tservice.deleteTeam(id).subscribe((res)=>{
      this.getAllTeams()
    })
  }

  navigateTo(id:any , path:any){

    this._router.navigate([path+id])
  }
}
