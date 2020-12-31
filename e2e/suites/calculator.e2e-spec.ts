import CalculatorSpecs from './../specs/calculator-spec';

describe('Platform Tests Calculator', () => {
    describe('Test Configures', () => {
        CalculatorSpecs.navigateToCalculator();
    });

    // Addition
    describe('Calculator Addition Opertions', () => {
        CalculatorSpecs.calculatorPerformAddtionOperation1();
        CalculatorSpecs.calculatorPerformAddtionOperation2();
        CalculatorSpecs.calculatorPerformAddtionOperation3();
    });

    // Subtraction
    describe('Calculator Subtraction Opertions', () => {
        CalculatorSpecs.calculatorPerformSubtractionOperation1();
        CalculatorSpecs.calculatorPerformSubtractionOperation2();
        CalculatorSpecs.calculatorPerformSubtractionOperation3();

    });

    // Multiplication
    describe('Calculator Multiplication Opertions', () => {
        CalculatorSpecs.calculatorPerformMultiplicationOperation1();
        CalculatorSpecs.calculatorPerformMultiplicationOperation2();
        CalculatorSpecs.calculatorPerformMultiplicationOperation3();
    });

    // Division
    describe('Calculator Division Opertions', () => {
        CalculatorSpecs.calculatorPerformDivisionOperation1();
        CalculatorSpecs.calculatorPerformDivisionOperation2();
        CalculatorSpecs.calculatorPerformDivisionOperation3();
    });

    // Modulo
    describe('Calculator Modulo Opertions', () => {
        CalculatorSpecs.calculatorPerformModuloOperation1();
        CalculatorSpecs.calculatorPerformModuloOperation2();
    });

    // Point Values
    describe('Calculator Point value Opertions', () => {
        CalculatorSpecs.calculatorPerformPointValueAdd();
        CalculatorSpecs.calculatorPerformPointValueSub();
        CalculatorSpecs.calculatorPerformPointValueMul();
        CalculatorSpecs.calculatorPerformPointValueDiv();
    });
    // navigate back
    describe('', () => {
        CalculatorSpecs.navigateBackToHome();
    });
});

