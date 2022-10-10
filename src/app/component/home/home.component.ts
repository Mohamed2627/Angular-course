import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotionAds } from 'src/app/model/ads';
import { ProductService } from 'src/app/service/product-service.service';
import { PromotionAdsService } from 'src/app/service/promotionAds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  ad:string="";
  Sub!:Subscription;

  constructor(private adsService:PromotionAdsService) { }

  ngOnInit() {
    // this.adsService.getSchadualeAds(3).subscribe(
    //   (data)=>{
    //   this.ad = data
    // })
    this.Sub=  this.adsService.getSchadualeAds(3).subscribe({
      next:(data)=>{
        this.ad = data.text
      },
      error:(error)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("Out of offers")
        
      }
    }
      )
  }
ngOnDestroy(): void {
  this.Sub.unsubscribe()
}
}
