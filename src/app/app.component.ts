import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
@Component({
  selector: 'app-root',
  imports:  [CommonModule,CurrencyConverterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  amount = 10;
  
}
