import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {
  name :string ="heba mohamed";
  title:string ="Developer"
  type:string="password"
  handelClick(val:any){
    console.log(val)
    this.name = val;
  }
  changeType(){
    this.type =='password'?this.type = "text":this.type ='password';
  }
  changeName(val:any){
    console.log(val)
    this.name = val;
  }
}
