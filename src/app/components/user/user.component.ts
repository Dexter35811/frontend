import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user=new User();
  constructor(private _service:RegistrationService) {

   }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(data => console.log("Response recieved"),error=>console.log("Exception occoured"))
  }

}
