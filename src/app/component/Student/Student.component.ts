import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/Student.service';

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})
export class StudentComponent implements OnInit {
id:number=0;
std!:IStudent;
  constructor(private active:ActivatedRoute,private router:Router,private StdService:StudentService) { }

  ngOnInit() {
    console.log('init')
    this.id= Number( this.active.snapshot.paramMap.get('id'))
    this.StdService.GetOne(this.id).subscribe(
      (Response)=>{
        this.std=Response.Data
      }
    )
    // this.active.paramMap.subscribe((paramMap)=>{
    //   this.id= Number(paramMap.get('id'))

    // })
  }
test(){

this.router.navigate(["/students",100])

}
}
