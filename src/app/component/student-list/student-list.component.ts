import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IStudent } from 'src/app/model/Student';
import { StudentService } from 'src/app/service/Student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit,OnDestroy {
  isloading = true;
  constructor(private StudentService: StudentService,private Router:Router) { }
  Subscription!:Subscription;
  list: IStudent[] = [];
  ngOnInit() {
    this.isloading = true;
    // this.StudentService.getAll().subscribe(
    //    (response) => {
    //     console.log(response)
    //     this.list = response.Data;
    //     this.isloading = false;
    //   })
   this.FetchData()

    console.log("in init");
  }
  FetchData(){
    this.Subscription = this.StudentService.getAll().subscribe(
      {
        next: (response) => {
          console.log(response)
          this.list = response.Data ;
          this.isloading = false;
        },
        error: (error) => {
          console.log(error)
          if(error["status"]==401)
          this.Router.navigate(["/login"]);
  
        },
        // complete:()=>{
        //   console.log("done")
        // }
      })
  }
  Delete(id:number){
    this.StudentService.Delete(id).subscribe({
      next:(value)=>{
        console.log(value)
        this.FetchData()
      }
    }

    )
  }
ngOnDestroy(): void {
  this.Subscription.unsubscribe()
}
}
