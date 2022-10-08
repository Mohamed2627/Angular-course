import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, IProduct } from 'src/app/model/IProduct';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  nowDate = Date.now();
  products: IProduct[] = []
  category: Category[] = []

  constructor(private prdService:ProductService,private catService:CategoryService) {

    this.products = this.prdService.getAll();
    this.category = this.catService.getAll();
  }

  ngOnInit(): void {
  }
  add() {
    // console.log(this.addform.value)
    // let prd: IProduct = {
    //   id: this.products.length * 100,
    //   name: this.addform.value["name"],
    //   img: this.addform.value["img"],
    //   qty: parseFloat(this.addform.value["qty"]),
    //   price: parseFloat(this.addform.value["price"]),
    //   categoryId: this.addform.value["categoryId"],
    // }
    // this.products.push(prd);
  }
}
