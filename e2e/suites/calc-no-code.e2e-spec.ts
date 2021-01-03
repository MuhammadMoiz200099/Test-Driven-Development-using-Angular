import CalculatorNoCodeInjectionSpecs from './../specs/calculator-no-code.spec';

describe('Platform Tests Calculator', () => {
    describe('Test Configures', () => {
        CalculatorNoCodeInjectionSpecs.navigateToCalculator();
    });

    // Addition
    describe('Calculator Addition Opertions', () => {
        CalculatorNoCodeInjectionSpecs.calculatorPerformAddtionOperation1();
        CalculatorNoCodeInjectionSpecs.calculatorPerformAddtionOperation2();
        CalculatorNoCodeInjectionSpecs.calculatorPerformAddtionOperation3();
    });

    // Subtraction
    describe('Calculator Subtraction Opertions', () => {
        CalculatorNoCodeInjectionSpecs.calculatorPerformSubtractionOperation1();
        CalculatorNoCodeInjectionSpecs.calculatorPerformSubtractionOperation2();
        CalculatorNoCodeInjectionSpecs.calculatorPerformSubtractionOperation3();

    });

    // Multiplication
    describe('Calculator Multiplication Opertions', () => {
        CalculatorNoCodeInjectionSpecs.calculatorPerformMultiplicationOperation1();
        CalculatorNoCodeInjectionSpecs.calculatorPerformMultiplicationOperation2();
        CalculatorNoCodeInjectionSpecs.calculatorPerformMultiplicationOperation3();
    });

    // Division
    describe('Calculator Division Opertions', () => {
        CalculatorNoCodeInjectionSpecs.calculatorPerformDivisionOperation1();
        CalculatorNoCodeInjectionSpecs.calculatorPerformDivisionOperation2();
        CalculatorNoCodeInjectionSpecs.calculatorPerformDivisionOperation3();
    });

    // Modulo
    describe('Calculator Modulo Opertions', () => {
        CalculatorNoCodeInjectionSpecs.calculatorPerformModuloOperation1();
        CalculatorNoCodeInjectionSpecs.calculatorPerformModuloOperation2();
    });

    // Point Values
    describe('Calculator Point value Opertions', () => {
        CalculatorNoCodeInjectionSpecs.calculatorPerformPointValueAdd();
        CalculatorNoCodeInjectionSpecs.calculatorPerformPointValueSub();
        CalculatorNoCodeInjectionSpecs.calculatorPerformPointValueMul();
        CalculatorNoCodeInjectionSpecs.calculatorPerformPointValueDiv();
    });
    // navigate back
    describe('', () => {
        CalculatorNoCodeInjectionSpecs.navigateBackToHome();
    });
});

