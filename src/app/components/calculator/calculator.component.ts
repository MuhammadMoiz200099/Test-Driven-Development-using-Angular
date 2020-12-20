import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  constructor() { }

  public equation = '0';
  public result: string;

  public pressNumbers(enteredNumber: string): void {
    if (this.equation.length === 1 && this.equation === '0') {
      this.equation = enteredNumber;
      return;
    }
    this.equation += enteredNumber;
  }

  public buttonClickedOpertions(enteredOperation: string): void {
    switch (enteredOperation) {
      case 'CE':
        this.equation = '0';
        this.result = '';
        break;
      case 'C':
        this.equation = '0';
        this.result = '';
        break;
      case 'BCK':
        if (this.equation.length === 1 && this.equation === '0') {
          break;
        }
        if (this.equation.length === 1) {
          this.equation = '0';
          break;
        }
        if (this.equation === 'Invalid Syntax' || this.equation === 'Math Error') {
          this.equation = '0';
          break;
        }
        this.equation = this.equation.slice(0, -1);
        break;
      default:
        if (this.equation.length === 1 && this.equation === '0') {
          this.equation = enteredOperation;
          break;
        }
        this.equation += enteredOperation;
        break;
    }
  }

  public equator(): void {
    const calc = this.equation.split('');
    if (this.findOperator(calc[0])) {
      this.equation = 'Invalid Syntax';
      return;
    }
    if (this.isFirstDot(calc[0])) {
      this.equation = 'Math Error';
      return;
    }
    const equationSolver = eval;
    this.result = equationSolver(this.equation);
  }
  public findOperator(op: string): boolean {
    return (op === '%') || (op === '+') || (op === '-') || (op === '/') || (op === '*');
  }
  public isFirstDot(op: string): boolean {
    return (op === '.');
  }
}
