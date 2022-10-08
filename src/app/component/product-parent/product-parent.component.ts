import { Component, OnInit } from '@angular/core';
import { CartItemArgs } from 'src/app/model/cartItemargs';
import { Category } from 'src/app/model/IProduct';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css']
})
export class ProductParentComponent implements OnInit {
 SelectedCat:number=0
totaprice:number=0;
 CategoryList: Category[] = []

  constructor(private catService:CategoryService,private prodService:ProductService) {
    this.CategoryList = this.catService.getAll();
  }

  ngOnInit() {
  }
  reciveCartItem(value:CartItemArgs){
    // console.log(value)
    this.prodService.AdditemtoCart(value);
    this.totaprice += value.price *value.qty
  }
test(num:number){
  console.log(num)
}
}
