import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(objs:any , term:any) {
    if (!term) {
      return objs
    }
    return objs.filter((obj:any)=>{
      return obj.teamOne.toLowerCase().includes(term.toLowerCase()) 
      || obj.teamTwo.toLowerCase().includes(term.toLowerCase())

    }) 
  }

}
