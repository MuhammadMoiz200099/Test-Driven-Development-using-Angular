// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// cmd :: protractor protractor.conf
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const { browser } = require('protractor');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/suites/calculator.e2e-spec.ts',
    './e2e/suites/temperature.e2e-spec.ts',
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
};



// "e2e": {
//   "builder": "@angular-devkit/build-angular:protractor",
//   "options": {
//     "protractorConfig": "e2e/protractor.conf.js",
//     "devServerTarget": "tddproject:serve"
//   },
//   "configurations": {
//     "production": {
//       "devServerTarget": "tddproject:serve:production"
//     }
//   }
// }