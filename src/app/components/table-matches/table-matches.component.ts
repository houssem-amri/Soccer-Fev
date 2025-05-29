import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table-matches.component.html',
  styleUrls: ['./table-matches.component.css']
})
export class TableMatchesComponent implements OnInit, OnDestroy {

  matches: any = []

  constructor(private router: Router, private matchesService: MatchesService) { }


  ngOnInit(): void {
    this.getAllMatches()
  }


  getAllMatches() {
    this.matchesService.getAllMatches().subscribe((result) => {
      this.matches = result.data
    })
  }


  deleteMatch(id: any) {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
      
    }).then((result) => {
      if (result.isConfirmed) {

        this.matchesService.deleteMatch(id).subscribe((res) => {

          this.getAllMatches()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });


        })

      }
    });


    // this.matches.splice(pos,1)
    // localStorage.setItem('matches',JSON.stringify(this.matches)) 
  }


  navigateTo(id: any, path: any) {
    this.router.navigate([path + id])
  }



  ngOnDestroy(): void {
    console.log("*****************");
  }

}
