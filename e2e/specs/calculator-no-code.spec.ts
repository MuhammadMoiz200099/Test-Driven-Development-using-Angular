import { $, ExpectedConditions as EC, browser } from 'protractor';
import { navigate, condition } from '../e2e-helpers.service';

class CalculatorNoCodeInjectionSpecs {
    private condition = '';
    public navigateToCalculator() {
        it('Should navigate to calculator Tab', async () => {
            await navigate('/');
            const navbar = $('#e2eHeaderNav');
            browser.wait(EC.visibilityOf(navbar));
            browser.sleep(300);
            expect(condition(this.condition)).toBeTrue();
        });
    }
    public navigateBackToHome() {
        it('Should navigate back Home Tab', async () => {
            const navbar = $('#e2eHeaderNav');
            browser.wait(EC.visibilityOf(navbar));
            const calculatorTab = navbar.$('.home-button');
            calculatorTab.click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    // Addition
    public calculatorPerformAddtionOperation1() {
        it('Should Added 2 + 2 for the result 4', async () => {
            browser.wait(EC.visibilityOf($('app-calculator')));

            $('#e2eCalc2Button').click();

            $('#e2eAdditionButton').click();

            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformAddtionOperation2() {
        it('Should Added 17 + 13 for the result 30', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc7Button').click();

            $('#e2eAdditionButton').click();

            $('#e2eCalc1Button').click();
            $('#e2eCalc3Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformAddtionOperation3() {
        it('Should Added 100 + 100 for the result 200', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eAdditionButton').click();

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    // Subtraction
    public calculatorPerformSubtractionOperation1() {
        it('Should Subtract 5 - 3 for the result 2', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc5Button').click();

            $('#e2eSubtractionButton').click();

            $('#e2eCalc3Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformSubtractionOperation2() {
        it('Should Subtract 19 - 4 for the result 15', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc9Button').click();

            $('#e2eSubtractionButton').click();

            $('#e2eCalc4Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformSubtractionOperation3() {
        it('Should Subtract 200 - 100 for the result 100', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc2Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eSubtractionButton').click();

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    // Multiplication
    public calculatorPerformMultiplicationOperation1() {
        it('Should Multiplication 5 * 5 for the result 25', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc5Button').click();

            $('#e2eMultiplicationButton').click();

            $('#e2eCalc5Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformMultiplicationOperation2() {
        it('Should Multiplication 10 * 10 for the result 100', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eMultiplicationButton').click();

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformMultiplicationOperation3() {
        it('Should Multiplication 100 * 5 for the result 500', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eMultiplicationButton').click();

            $('#e2eCalc5Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    // Division
    public calculatorPerformDivisionOperation1() {
        it('Should Division 4 / 2 for the result 2', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc4Button').click();

            $('#e2eDivideButton').click();

            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformDivisionOperation2() {
        it('Should Division 50 / 25 for the result 2', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc5Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eDivideButton').click();

            $('#e2eCalc2Button').click();
            $('#e2eCalc5Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformDivisionOperation3() {
        it('Should Division 400 / 200 for the result 2', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc4Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eDivideButton').click();

            $('#e2eCalc2Button').click();
            $('#e2eCalc0Button').click();
            $('#e2eCalc0Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    // Modulo
    public calculatorPerformModuloOperation1() {
        it('Should Solve 10 % 2 for the result 0', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eModuloButton').click();

            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformModuloOperation2() {
        it('Should Solve 10 % 3 for the result 1', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eCalc0Button').click();

            $('#e2eModuloButton').click();

            $('#e2eCalc3Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    // calculate Point Values    
    public calculatorPerformPointValueAdd() {
        it('Should Add 1.1 + 1.2 for the result 2.3', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc1Button').click();

            $('#e2eAdditionButton').click();

            $('#e2eCalc1Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformPointValueSub() {
        it('Should Subtract 2.3 - 1.1 for the result 1.2', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc6Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc2Button').click();

            $('#e2eSubtractionButton').click();

            $('#e2eCalc2Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformPointValueMul() {
        it('Should Multiply 1.1 * 1.2 for the result 1.32', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc1Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc1Button').click();

            $('#e2eMultiplicationButton').click();

            $('#e2eCalc1Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(1000);
        });
    }
    public calculatorPerformPointValueDiv() {
        it('Should Divide 4.4 / 2.2 for the result 2', async () => {
            $('#e2eCEButton').click();
            browser.sleep(300);

            $('#e2eCalc4Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc4Button').click();

            $('#e2eDivideButton').click();

            $('#e2eCalc2Button').click();
            $('#e2eDotButton').click();
            $('#e2eCalc2Button').click();

            browser.sleep(300);
            $('#e2eEqualsButton').click();
            expect(condition(this.condition)).toBeTrue();
            browser.sleep(5000);
            $('#e2eCEButton').click();
        });
    }
}

export default new CalculatorNoCodeInjectionSpecs();
