import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegister } from 'src/app/model/user';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addform!:FormGroup;
  returnURL:string = "";
  constructor(private router:Router,private activate:ActivatedRoute,private Auth:AuthService) {
   this.addform = new FormGroup({
    Name:new FormControl("",[Validators.required]),
    UserName:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required]),})}

  ngOnInit() {
  }
  add(){
    let user :UserRegister = this.addform.value as UserRegister
    this.Auth.register(user).subscribe((response)=>{
      if(response.Data) this.router.navigateByUrl("/login")
      else alert(response.Message)
    }

    )
  }

}
