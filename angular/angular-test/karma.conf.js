// Karma configuration file
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
    ],
    client: {
      jasmine: {}
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: path.join(__dirname, './coverage/angular-starter'),
      subdir: '.',
      reporters: [
        { type: 'html' },          // rapport complet (navigateur)
        { type: 'text-summary' },  // résumé global
        { type: 'text' }           // ← détail par fichier dans le terminal
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    browsers: ['ChromeHeadless'],
    restartOnFileChange: true,
    singleRun: true
  });
};


