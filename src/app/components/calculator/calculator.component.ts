import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  constructor() { }

  public equation = '0';

  public pressNumbers(enteredNumber: string): void {
    this.equation = enteredNumber;
  }

  public buttonClickedOpertions(enteredOperation: string): void {
    this.equation = enteredOperation;
  }

  public equator(): void {
    this.equation = 'pressed';
  }
}
