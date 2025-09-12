import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64Encode',
  standalone: true,
})
export class Base64EncodePipe implements PipeTransform {
  transform(value: string): string {
    return window.btoa(value);
  }
}
