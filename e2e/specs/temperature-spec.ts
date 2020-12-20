import { browser } from 'protractor';

class TemperatureSpecs {
    public navigateToTemperature() {
        browser.sleep(1000);
    }
}

export default new TemperatureSpecs();
