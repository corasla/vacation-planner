import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charCount'
})
export class CharCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const limit = args[0] || 0
    let result = ''
    if (value) {
      result = value.length
    }

    if (limit) {
      return `Wrote ${result} / ${limit}`
    }

    return `Wrote ${result} characters`
  }

}
