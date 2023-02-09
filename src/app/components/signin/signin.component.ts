import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(
    public router: Router
  ){

  }
  title = 'mainProject';
  email = '';
  password = '';

  ngOnInit() {

  }
  logInUser() {
    if (this.email == "shruti@gmail.com" && this.password == "shruti@123"){
    this.router.navigate(['/signin']);
    }
    else {
      alert("user unauthorized")
    }
  }

}

