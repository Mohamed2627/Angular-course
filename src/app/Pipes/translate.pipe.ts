import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    return this.words.find(item=>item.key==value)?.value!;
  }

  words:{key:string,value:string}[]=[
    {key:"home",value:"الرئيسيه"}
  ]
}
