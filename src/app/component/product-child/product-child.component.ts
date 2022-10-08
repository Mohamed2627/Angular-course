import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItemArgs } from 'src/app/model/cartItemargs';
import { IProduct } from 'src/app/model/IProduct';
import { ProductService } from 'src/app/service/product-service.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit,OnChanges {
  FilterList:IProduct[];

  @Input() SelectedCategory:number=0; 
  @Output ()  handellist:EventEmitter<CartItemArgs>
  @Output ()  ayhaga:EventEmitter<number>
  constructor(
    private prdservice:ProductService,
    private router:Router
  ) { 
    this.ayhaga = new EventEmitter<number>;
    this.handellist = new EventEmitter<CartItemArgs>()
    this.FilterList = prdservice.getAll()
  }
  
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.FilterList = this.prdservice.filtterByCategoryId(this.SelectedCategory)
  }
  
  details(id:number){
    // this.router.navigateByUrl('')
    this.router.navigate(["/product",id])
    this.ayhaga.emit(id);
  }
  addToCart(id:number,price:number){
    this.handellist.emit({
      id:id,
      price:price,
      qty:1});
  }
}
