// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// https://github.com/angular/protractor/blob/master/example/conf.js
// node --max-old-space-size=8192 node_modules/@angular/cli/bin/ng serve --configuration uat

// cmd :: protractor protractor.conf
// cmd :: protractor --suite platform-tests
const {
  SpecReporter
} = require('jasmine-spec-reporter');
const {
  resolve
} = require('path');
const downloadloc = resolve(__dirname, './e2e/downloads');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'e2e-tests-report/screenshots',
  filename: 'E2E-tests-report.html'
});

exports.config = {
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  allScriptsTimeout: 11000,
  specs: [
    './e2e/suites/calculator.e2e-spec.ts',
    './e2e/suites/temperature.e2e-spec.ts',
  ],
  params: {
    downloadLoc: downloadloc
  },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      prefs: {
        download: {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory': downloadloc
        }
      },
      args: [
        '--start-maximized'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  suites: {
    'platform-tests-calculator': './e2e/suites/calculator.e2e-spec.ts',
    // 'platform-tests-temperature': './e2e/suites/temperature.e2e-spec.ts',
  },

  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
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