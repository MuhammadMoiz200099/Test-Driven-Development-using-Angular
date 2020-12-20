import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent {

  public fahrenheit: string;
  public celsius: string;
  public fahrenheitControl = new FormControl('');
  public celsiusControl = new FormControl('');

  constructor() {
  }

  public conversionFahrenheit(): void {
    const value = this.celsiusControl.value;
    const t1 = value * 0.5555555555555556;
    const val = t1 + 32;
    this.fahrenheit = (Math.round(val * 100) / 100) + '\xB0F';
  }

  public conversionCelsius(): void {
    const value = this.fahrenheitControl.value;
    const t1 = (value - 32);
    const val = (0.5555555555555556) * t1;
    this.celsius = (Math.round(val * 100) / 100) + '\xB0C';
  }

  public clearCelsius(): void {
    this.fahrenheitControl.reset();
    this.celsius = '';
  }
  public clearFahrenheit(): void {
    this.celsiusControl.reset();
    this.fahrenheit = '';
  }

}
