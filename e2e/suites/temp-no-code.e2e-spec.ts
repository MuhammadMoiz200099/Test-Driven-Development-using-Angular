import TemperatureNoCodeInjectionSpecs from './../specs/temperature-no-code.spec';

describe('Platform Tests Temperature App', () => {
    describe('Test Configures', () => {
        TemperatureNoCodeInjectionSpecs.navigateToTemperature();
    });

    describe('Convert Celsius To Fahrenheit', () => {
        TemperatureNoCodeInjectionSpecs.convertCelsiusToFahrenheit(15, '40.33°F');
        TemperatureNoCodeInjectionSpecs.checkCelsiusClearFunctionailty();

        TemperatureNoCodeInjectionSpecs.convertCelsiusToFahrenheit(11, '38.11°F');
        TemperatureNoCodeInjectionSpecs.checkCelsiusClearFunctionailty();

        TemperatureNoCodeInjectionSpecs.convertCelsiusToFahrenheit(29, '48.11°F');
    });

    describe('Convert Fahrenheit To Celsius', () => {
        TemperatureNoCodeInjectionSpecs.convertFahrenheitToCelsius(15, '-9.44°C');
        TemperatureNoCodeInjectionSpecs.checkFahrenheitClearFunctionailty();

        TemperatureNoCodeInjectionSpecs.convertFahrenheitToCelsius(23, '-5°C');
        TemperatureNoCodeInjectionSpecs.checkFahrenheitClearFunctionailty();

        TemperatureNoCodeInjectionSpecs.convertFahrenheitToCelsius(2, '-16.67°C');
    });

    describe('Empty Both Text Fields', () => {
        TemperatureNoCodeInjectionSpecs.checkCelsiusClearFunctionailty();
        TemperatureNoCodeInjectionSpecs.checkFahrenheitClearFunctionailty();
    });
});