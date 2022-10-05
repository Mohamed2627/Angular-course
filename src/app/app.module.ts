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

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    StudentComponent,
    CourseComponent,
    ProductlistComponent,
    ImgboxDirective,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
