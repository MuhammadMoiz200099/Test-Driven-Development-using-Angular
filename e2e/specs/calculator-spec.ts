import { browser } from 'protractor';

class CalculatorSpecs {
    public navigateToCalculator() {
        browser.sleep(1000);
    }
}

export default new CalculatorSpecs();
