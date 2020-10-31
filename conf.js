// An example configuration file.

var Jasmine2HtmlReporter = require('C:/Users/Bijan/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
  
    chromeOptions: {
       args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
     }
  },

  // multiCapabilities:[{
  //   'browserName': 'chrome'},
  //   {'browserName': 'firefox'
  // }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['register_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './reports/',
        screenshotsFolder: 'images',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        fileNameDateSuffix: true,
        fileNamePrefix: 'Protractor',
        fileName: 'HTMLReport',
        fileNameSeparator: '_'
      })
    );
 }



};
