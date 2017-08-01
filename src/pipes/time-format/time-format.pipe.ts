import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(dateAndTime: string, ...args)
  {
    let value = new Date(dateAndTime);
    let hours:any = value.getHours();
    if(hours < 10)
    {
      hours="0"+hours;
    }

    let minutes:any = value.getMinutes();
    if(minutes < 10)
    {
      minutes="0"+minutes;
    }

    return `${hours}:${minutes}`;
  }
}
