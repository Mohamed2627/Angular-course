import { Component, OnInit } from '@angular/core';
import { retry, Subject } from 'rxjs';
import { LoaderService } from './service/API/Loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  // isloading:boolean=false;
  isloading:Subject<boolean>;

  constructor(private Loader:LoaderService){
    this.isloading = this.Loader.isloading
  }
  ngOnInit(): void {
    // this.Loader.getLoader().subscribe(
    //   (data)=>{
    //     this.isloading = data
    //   }
    // )
  }
}
