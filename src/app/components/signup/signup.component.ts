import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MustMatch } from 'src/app/shared/confirmPassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submited = false

  SignupForm !: FormGroup

  role :string = window.location.pathname == '/signup/admin' ? 'admin' : 'user'

  constructor(private formbuilder: FormBuilder, private uService: UsersService) { }

  ngOnInit(): void {

    this.SignupForm = this.formbuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      cPassword: ['']

    }, {
      validators: MustMatch('password', 'cPassword')

    })

  }



  signup() {

    


    this.SignupForm.value.role = this.role
    this.uService.signup(this.SignupForm.value).subscribe((res) => {
      console.log(res.message);

    })

  }



}
