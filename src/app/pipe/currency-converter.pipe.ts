import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(args);
    let rate = args.length ? args[0] as number : 85;
    return value*85;
  }

}
