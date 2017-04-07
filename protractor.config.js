// FIRST TIME ONLY- run:
//   ./node_modules/.bin/webdriver-manager update
//
//   Try: `npm run webdriver:update`
//
// AND THEN EVERYTIME ...
//   1. Compile with `tsc`
//   2. Make sure the test server (e.g., lite-server: localhost:8080) is running.
//   3. ./node_modules/.bin/protractor protractor.config.js
//
//   To do all steps, try:  `npm run e2e`

var fs  = require('fs');
var path  = require('canonical-path');
var _ = require('lodash');

exports.config  =  {
  directConnect : true,

  // Capabilities to be passed to the webdriver instance.
  capabilities : {
    'browserName' : 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework : 'jasmine',

  // Spec patterns are relative to this config file
  specs     : ['**/*e2e-spec.js'],

  // For angular tests
  useAllAngular2AppRoots :  true,

  // Base URL for application server
  baseUrl : 'http://localhost:8080',

  // doesn't seem to work.
  // resultJsonOutputFile : "foo.json",

  onPrepare : function() {
    //// SpecReporter
    //var SpecReporter = require('jasmine-spec-reporter');
    //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'none'}));
    //// jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

    // debugging
    // console.log('browser.params:' + JSON.stringify(browser.params));
    jasmine.getEnv().addReporter(new Reporter( browser.params ));

    // Allow changing bootstrap mode to NG1 for upgrade tests
    global.setProtractorToNg1Mode = function() {
      browser.useAllAngular2AppRoots = false;
      browser.rootEl                 = 'body';
    };
  },
  
}
