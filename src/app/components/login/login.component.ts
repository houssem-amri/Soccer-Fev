import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {}

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }


  login() {
    this.userService.login(this.user).subscribe((res) => {

      console.log(res);
      if (res.message==='2') {
        localStorage.setItem('token',res.token)
      } else {
        // Msg ERR ( toastr )
      }

    }
    )

  }


  

}


