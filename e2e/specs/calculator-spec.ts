import { $, ExpectedConditions as EC, browser } from 'protractor';
import { navigate } from '../e2e-helpers.service';

class CalculatorSpecs {
    public navigateToCalculator() {
        it('Should navigate to calculator Tab',  async () => {
            // await browser.waitForAngularEnabled(false);
            await navigate('/');
            // browser.sleep(100000000);
            const navbar = $('#e2eHeaderNav');
            browser.wait(EC.visibilityOf(navbar));
            const calculatorTab = navbar.$('.calc-button');
            calculatorTab.click();
            browser.sleep(1000);
            browser.sleep(1000);
            browser.sleep(1000);
            browser.sleep(1000);
            browser.sleep(1000);
            browser.sleep(1000);
            browser.sleep(1000);
            browser.sleep(1000);
        });
    }
}

export default new CalculatorSpecs();
