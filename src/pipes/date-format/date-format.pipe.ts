import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(timeAndDate: string, ...args)
  {
    let value = new Date(timeAndDate);
    let day:any = value.getDay();
    if(day < 10)
    {
      day="0"+day;
    }

    let month:any = value.getMonth();
    if(day < 10)
    {
      month="0"+month;
    }

    return `${value.getFullYear()}-${month}-${day}`;
  }
}
