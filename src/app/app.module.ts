import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './component/demo.compoment';
import { CourseComponent } from './course/course.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ImgboxDirective } from './Directives/imgbox.directive';
import { TranslatePipe } from './Pipes/translate.pipe';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductChildComponent } from './component/product-child/product-child.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { AppRoutingModule } from './app-rouring.module';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { DashbourdComponent } from './component/dashbourd/dashbourd.component';
import { DashbourdLayoutComponent } from './component/dashbourd-layout/dashbourd-layout.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CreateStudentComponent } from './component/create-student/create-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentComponent } from './component/Student/Student.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ProfileComponent } from './component/Profile/Profile.component';
import { LoaderInterceptor } from './service/API/loader.interceptor';
import { AuthInterceptor } from './service/API/auth.interceptor';
import { HttpIntercepters } from './service/API/httpInetcebtors';
import { LoaderComponent } from './component/loader/loader.component';

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
    ProductDetailsComponent,
    CreateStudentComponent,
    StudentListComponent,
    StudentComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  AppRoutingModule,
  HttpClientModule
  ],
  providers: [
    // ProductService
    HttpIntercepters
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
