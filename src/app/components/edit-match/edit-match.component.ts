import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {


  id: any

  match: any = {}

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mService: MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')   
    this.getMatchById()
  }


  getMatchById() {
    this.mService.getMatchById(this.id).subscribe((res) => {

      if (res.message ==='0') {
        this.router.navigate(['/table-matches'])
        
      } else {

        console.log(res.match.scoreOne);
        
        this.match = res.match
      }

      
    })
  }



  editMatch() {
 
    this.mService.updateMatch(this.match).subscribe((res)=>{

      console.log(res.message);
      this.router.navigate(['/table-matches'])
    })
    // let matches = JSON.parse(localStorage.getItem('matches') || '[]')

    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id == this.id) {
    //     matches[i] = this.match
    //     break
    //   }
    // }

    // localStorage.setItem('matches', JSON.stringify(matches))
    // this.router.navigate(['/table-matches'])

  }

}
