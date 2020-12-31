import TemperatureSpecs from './../specs/temperature-spec';

describe('Platform Tests Temperature App', () => {
    describe('Test Configures', () => {
        TemperatureSpecs.navigateToTemperature();
    });

    describe('Convert Celsius To Fahrenheit', () => {
        TemperatureSpecs.convertCelsiusToFahrenheit(15, '40.33°F');
        TemperatureSpecs.checkCelsiusClearFunctionailty();

        TemperatureSpecs.convertCelsiusToFahrenheit(11, '38.11°F');
        TemperatureSpecs.checkCelsiusClearFunctionailty();

        TemperatureSpecs.convertCelsiusToFahrenheit(29, '48.11°F');
    });

    describe('Convert Fahrenheit To Celsius', () => {
        TemperatureSpecs.convertFahrenheitToCelsius(15, '-9.44°C');
        TemperatureSpecs.checkFahrenheitClearFunctionailty();

        TemperatureSpecs.convertFahrenheitToCelsius(23, '-5°C');
        TemperatureSpecs.checkFahrenheitClearFunctionailty();

        TemperatureSpecs.convertFahrenheitToCelsius(2, '-16.67°C');
    });

    describe('Empty Both Text Fields', () => {
        TemperatureSpecs.checkCelsiusClearFunctionailty();
        TemperatureSpecs.checkFahrenheitClearFunctionailty();
    });
});