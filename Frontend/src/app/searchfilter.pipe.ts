import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val : any) => {
      let rVal = (val.description.toLocaleLowerCase().includes(args) | val.location.toLocaleLowerCase().includes(args)) ;
      return rVal;
    })

}

}
