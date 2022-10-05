import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, IProduct } from 'src/app/model/IProduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  nowDate = Date.now();
  products: IProduct[] = []
  category: Category[] = []
  addform: FormGroup;
  constructor() {
    this.addform = new FormGroup(
      {
        categoryId: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required, Validators.minLength(5)]),
        qty: new FormControl(1, [Validators.required, Validators.min(1)]),
        price: new FormControl(1, [Validators.required, Validators.min(1)]),
        img: new FormControl("", [Validators.required, Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      }
    )
    this.category = [
      {
        id: 1,
        name: "pc"
      },
      {
        id: 2,
        name: "pc"
      }, {
        id: 3,
        name: "pc"
      }, {
        id: 4,
        name: "pc"
      }, {
        id: 1,
        name: "pc"
      },
    ]
    this.products = [
      {
        id: 100,
        name: "product 1",
        qty: 0,
        price: 100,
        img: "https://fakeimg.pl/250x100/",
        categoryId: 1
      },
      {
        id: 200,
        name: "product 1",
        qty: 5,
        price: 100,
        img: "https://fakeimg.pl/250x100/",
        categoryId: 2
      },
      {
        id: 100,
        name: "product 1",
        qty: 10,
        price: 100,
        img: "https://fakeimg.pl/250x100/",
        categoryId: 3
      },
      {
        id: 100,
        name: "product 1",
        qty: 2,
        price: 100,
        img: "https://fakeimg.pl/250x100/",
        categoryId: 3
      },
      {
        id: 100,
        name: "product 1",
        qty: 4,
        price: 100,
        img: "https://fakeimg.pl/250x100/",
        categoryId: 4
      },
      {
        id: 100,
        name: "product 1",
        qty: 0,
        price: 100,
        img: "https://fakeimg.pl/250x100/",
        categoryId: 4
      },
    ]
  }

  ngOnInit(): void {
  }
  add() {
    console.log(this.addform.value)
    let prd: IProduct = {
      id: this.products.length * 100,
      name: this.addform.value["name"],
      img: this.addform.value["img"],
      qty: parseFloat(this.addform.value["qty"]),
      price: parseFloat(this.addform.value["price"]),
      categoryId: this.addform.value["categoryId"],
    }
    this.products.push(prd);
  }
}
