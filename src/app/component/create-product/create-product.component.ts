import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/model/IProduct';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  addform: FormGroup;
  category:Category[];

  constructor(private categoryService:CategoryService ) { 
    this.category = categoryService.getAll();
    this.addform = new FormGroup(
      {
        categoryId: new FormControl("", [Validators.required]),
        name: new FormControl("", [Validators.required, Validators.minLength(5)]),
        qty: new FormControl(1, [Validators.required, Validators.min(1)]),
        price: new FormControl(1, [Validators.required, Validators.min(1)]),
        img: new FormControl("", [Validators.required, Validators.pattern("^https?:\/\/[A-Za-z0-9:.]*([\/]{1}.*\/?)$")]),
      }
    )
  }
  add(){}

  ngOnInit() {

  }

}
