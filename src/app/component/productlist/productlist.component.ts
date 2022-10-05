import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from 'src/app/model/IProduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:IProduct[] =[]
  category:Category[] =[]
  constructor() { 
    this.category=[
     {
        id:1,
        name:"pc"
      },
      {
        id:2,
        name:"pc"
      },{
        id:3,
        name:"pc"
      },{
        id:4,
        name:"pc"
      },{
        id:1,
        name:"pc"
      },
    ]
    this.products=[
      {
        id:100,
        name:"product 1",
        qty:0,
        price:100,
        img:"https://fakeimg.pl/250x100/",
        categoryId:1
      },
      {
        id:200,
        name:"product 1",
        qty:5,
        price:100,
        img:"https://fakeimg.pl/250x100/",
        categoryId:2
      },
      {
        id:100,
        name:"product 1",
        qty:10,
        price:100,
        img:"https://fakeimg.pl/250x100/",
        categoryId:3
      },
      {
        id:100,
        name:"product 1",
        qty:2,
        price:100,
        img:"https://fakeimg.pl/250x100/",
        categoryId:3
      },
      {
        id:100,
        name:"product 1",
        qty:4,
        price:100,
        img:"https://fakeimg.pl/250x100/",
        categoryId:4
      },
      {
        id:100,
        name:"product 1",
        qty:0,
        price:100,
        img:"https://fakeimg.pl/250x100/",
        categoryId:4
      },
    ]
  }

  ngOnInit(): void {
  }

}
