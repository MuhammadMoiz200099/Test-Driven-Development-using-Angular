import { $, ExpectedConditions as EC, browser, Key } from 'protractor';
import { condition } from '../e2e-helpers.service';

class TemperatureNoCodeInjectionSpecs {
    private condition = '';
    public navigateToTemperature() {
        it('Should navigate to Temperature Tab', async () => {
            const navbar = $('#e2eHeaderNav');
            browser.wait(EC.visibilityOf(navbar));
            browser.sleep(1000);
            expect(condition(this.condition)).toBeTrue();
        });
    }

    public convertCelsiusToFahrenheit(value: number, expectValue: string) {
        it(`Should Convert Celsius ${value} to Fahrenheit ${expectValue}`, async () => {
            $('#e2eCelsiusInput').sendKeys(value);
            $('#e2eCelsiusInput').sendKeys(Key.TAB);
            browser.sleep(500);
            $('#e2eCelsiusConvertButton').click();
            browser.sleep(500);
            const text = $('#e2eCelsiusAnswerBox').getText();
            expect(text).toBe(expectValue);
            browser.sleep(1000);
        });
    }

    public convertFahrenheitToCelsius(value: number, expectValue: string) {
        it(`Should Convert Fahrenheit ${value} to Celsius ${expectValue}`, async () => {
            $('#e2eFahrenheitInput').sendKeys(value);
            $('#e2eFahrenheitInput').sendKeys(Key.TAB);
            browser.sleep(500);
            $('#e2eFahrenheitConvertButton').click();
            browser.sleep(500);
            const text = $('#e2eFahrenheitAnswerBox').getText();
            expect(text).toBe(expectValue);
            browser.sleep(1000);
        });
    }

    public checkCelsiusClearFunctionailty() {
        it('Should clear the text field and result on clear button pressed for Celsius.', async () => {
            browser.sleep(300);
            $('#e2eCelsiusClearButton').click();
            browser.sleep(300);
            const text = $('#e2eCelsiusAnswerBox').getText();
            expect(text).toBe('');
            browser.sleep(1000);
        });
    }
    public checkFahrenheitClearFunctionailty() {
        it('Should clear the text field and result on clear button pressed for Fahrenheit.', async () => {
            browser.sleep(300);
            $('#e2eFahrenheitClearButton').click();
            browser.sleep(300);
            const text = $('#e2eFahrenheitAnswerBox').getText();
            expect(text).toBe('');
            browser.sleep(1000);
        });
    }
}

export default new TemperatureNoCodeInjectionSpecs();
