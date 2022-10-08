import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './component/demo.compoment';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ImgboxDirective } from './Directives/imgbox.directive';
import { TranslatePipe } from './Pipes/translate.pipe';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { ProductService } from './service/product-service.service';
import { ProductChildComponent } from './component/product-child/product-child.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { AppRoutingModule } from './app-rouring.module';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { DashbourdComponent } from './component/dashbourd/dashbourd.component';
import { DashbourdLayoutComponent } from './component/dashbourd-layout/dashbourd-layout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    StudentComponent,
    CourseComponent,
    ProductlistComponent,
    ImgboxDirective,
    TranslatePipe,
    NavbarComponent,
    ProductlistComponent,
    CreateProductComponent,
    ProductChildComponent,
    ProductParentComponent,
    MainLayoutComponent,
    DashbourdComponent,
    DashbourdLayoutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  AppRoutingModule
  ],
  providers: [
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
