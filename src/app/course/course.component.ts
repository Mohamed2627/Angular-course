import { Component, Host, OnInit } from '@angular/core';
import { Course } from '../model/cousre';
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  crs:Course=new Course();
  form= new FormGroup({
    title:new FormControl(""),
    descrpition:new FormControl(""),
    hours:new FormControl(""),
    Trainername:new FormControl(""),
  })
  Trainers:string[]=[

    "heba",
    "mohemad",
    "taha",
    "amira",
  ]
  
  ToShow=false;
  constructor() { }

  ngOnInit(): void {
  }
  print(){
    console.log( "Form"+this.form.value.title)
    this.crs.title =  this.form.value["title"]!;
    this.crs.title =  this.form.value["title"]!;
    this.crs.title =  this.form.value["title"]!;
    console.log( "crs"+this.crs.title)
  }
  Show(){
    if(parseInt( this.form.value["hours"]!) >10)
    this.ToShow = true
    else
    this.ToShow = false

  }


}
