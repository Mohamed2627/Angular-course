import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PromotionAds } from '../model/ads';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList: PromotionAds[];

  constructor() {
    this.adsList = [

      { id: 1, text: "Big Discounts", providerUrl: "https://www.linkedin.com/", img: "https://img.freepik.com/free-vector/demand-analysts-shaking-hands-from-laptops-screens-planning-future-demand-demand-planning-demand-analytics-digital-sales-forecast-concept-illustration_335657-2098.jpg?w=740&t=st=1665370790~exp=1665371390~hmac=3afbfee66f51d175722f62783500646ff6a359e04ebc23de043e3b9a450546ff" }
      , { id: 2, text: "Sale up to 50%", providerUrl: "https://www.facebook.com/", img: "https://img.freepik.com/free-vector/realistic-sale-background-with-ripped-paper_52683-55790.jpg?w=740&t=st=1665370843~exp=1665371443~hmac=1214021470605dd4ba168981b5f1684955ebc6bd1e1283441e0c66aba0a79585" }
      // ,{id :5,text:"",providerUrl:"https://www.google.com/",img:"https://img.freepik.com/free-vector/demand-analysts-shaking-hands-from-laptops-screens-planning-future-demand-demand-planning-demand-analytics-digital-sales-forecast-concept-illustration_335657-2098.jpg?w=740&t=st=1665370790~exp=1665371390~hmac=3afbfee66f51d175722f62783500646ff6a359e04ebc23de043e3b9a450546ff"}
      , { id: 3, text: "Check our white Friday offers", providerUrl: "https://www.google.com/", img: "https://img.freepik.com/free-vector/demand-analysts-shaking-hands-from-laptops-screens-planning-future-demand-demand-planning-demand-analytics-digital-sales-forecast-concept-illustration_335657-2098.jpg?w=740&t=st=1665370790~exp=1665371390~hmac=3afbfee66f51d175722f62783500646ff6a359e04ebc23de043e3b9a450546ff" }
      , { id: 4, text: "Special black Friday offers up to 70%", providerUrl: "https://www.amazon.com/", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wzYudQPqykcH6wc0aT2BpeQW6fEHQrK_pl0_3YWxhs-EreaooO4ii7jwHQapk3MsuUo&usqp=CAU" }
    ];
  }

  getSchadualeAds(timeInSec: number) {
    return new Observable<PromotionAds>(
      (observer) => {
        let counter = 0

        let timer = setInterval(() => {
          if (counter == this.adsList.length) counter = 0
          if (this.adsList[counter].text == "") observer.error("error")
          observer.next(this.adsList[counter])
          counter++
        }, timeInSec * 1000)
        // observer.complete()
        // observer.error()
        return {
          unsubscribe() {
            console.log("unsubscribe")
            clearInterval(timer)
          }
        }
      }

    )
  }

}
