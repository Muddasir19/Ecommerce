import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortheading',
})
export class ShortheadingPipe implements PipeTransform {
  transform(value: string, length: number): any {
    let newValue;
    if (value) {
      newValue = value.slice(0, length);
    } else {
      newValue = value;
    }

    return newValue;
  }
}
