// An example configuration file.

var Jasmine2HtmlReporter = require('C:/Users/Bijan/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');
var retry = require('C:/Users/Bijan/AppData/Roaming/npm/node_modules/protractor-retry').retry;

exports.config = {
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['login_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onCleanUp: function (results) {
    retry.onCleanUp(results);
  },

  onPrepare: function() {
    retry.onPrepare();
 },

  afterLaunch: function() {
    return retry.afterLaunch(2);
  } 

};
