import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {


  player: any = {}
  teams: any = []
  imagePreview: any
  image: any
  id: any
  title: string = 'Add Player'
  constructor(private tService: TeamsService, private pService: PlayersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllTeams()

    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = 'Edit Player'
      this.getPlayerById()
    }
  }

  getAllTeams() {
    this.tService.getAllTeams().subscribe((res) => {
      this.teams = res.data
    })
  }


  getPlayerById() {
    this.pService.getPlayerById(this.id).subscribe((res) => {
      this.player = res.player
      this.imagePreview = res.player.image
    })
  }


  addEditPlayer() {
    if (this.id) {
      this.pService.updatePlayer(this.player, this.image).subscribe((res) => {
        console.log(res.message);

      })

    } else {
      this.pService.addPlayer(this.player, this.image).subscribe((res) => {
        console.log(res.message);

      })
    }


  }


  onImageSelected(event: any) {
    const file = event.target.files[0]
    if (file.size > 2 * 1024 * 1024) {
      Swal.fire({
        title: "Upload Image!",
        text: "Max 5Mb",
        icon: "error"
      });
    } else {
      this.image = file
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string
      };
      reader.readAsDataURL(file);
    }



  }



}
