import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {


  match: any = {}
  

  constructor(
    private router: Router,
    private mService: MatchesService,
    private toastr: ToastrService,
   

  ) { }

  ngOnInit(): void {

  }

  addMatch() {

    this.mService.addMatch(this.match).subscribe((res) => {

      if (res.message === '0') {

        this.toastr.error('Add Match', 'Invalid data Match', {
          timeOut: 3000,
          progressBar: true,
          closeButton: true,

        });

      } else {
        this.router.navigate(['/dashboard'])

      }


    })

  }

}
