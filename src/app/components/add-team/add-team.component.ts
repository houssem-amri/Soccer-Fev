import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {


  team: any = {}
  id: any
  title: string = 'Add Team'

  constructor(private tService: TeamsService,
    private toastr: ToastrService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    if (this.id) {
      this.title = 'Edit Team'
      this.getTeamById()
    }
  }


  addEditTeam() {

    if (this.id) {
      // here into Edit

      this.tService.updateTeam(this.team).subscribe((res): any => {
        if (res.message === '0') {

          return this.toastr.error('Edit Team', 'Invalid data Team', {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,

          });
        }
        this._router.navigate(['/dashboard'])
      })
    } else {
      // here into Add
      this.tService.addTeam(this.team).subscribe((res): any => {
        console.log(res.message);
        if (res.message === '0') {

          return this.toastr.error('Add Team', 'Invalid data Team', {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,

          });
        }

        this._router.navigate(['/dashboard'])



      })
    }


  }

  getTeamById() {

    this.tService.getTeamById(this.id).subscribe((res) => {
      this.team = res.team

    })
  }

}
