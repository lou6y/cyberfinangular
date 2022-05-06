import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorterate'
})
export class SorteratePipe implements PipeTransform {

  transform(value: Array<any>, ...args: any[]): any {
   return value.sort((a,b)=>{
    let x=a.ratingAvg;
    let y=b.ratingAvg;
   if(x>y)
   {
return -1
   }
   else{
     return 1;
   }
return 0;

    })
  }

}
