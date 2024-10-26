import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortheading',
})
export class ShortheadingPipe implements PipeTransform {
  transform(value: string): any {
    let newValue;
    if (value) {
      newValue = value.slice(0, 40);
    } else {
      newValue = value;
    }

    return newValue;
  }
}
