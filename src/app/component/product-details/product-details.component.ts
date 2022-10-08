import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from 'src/app/service/product-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:number=0;
  prd:IProduct|null=null;
  private ActivatedRoute;
  constructor(_ActivatedRoute:ActivatedRoute,private prdserv:ProductService) {
    this.ActivatedRoute= _ActivatedRoute;
  }
  
  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe((data)=>
      this.id=Number( data.get('pid'))
    )
    
    // this.id=  Number( this.ActivatedRoute.snapshot.paramMap.get('pid'))
   this.prd= this.prdserv.getOneByID(this.id)
  }
back(){

}
next(){

}
}
