var jasmineReporters = require('jasmine-reporters');
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/test/javascript/**/*-protractor.js'],
  onPrepare: function() {
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(
      {
        savePath: 'target'
      }
    ));
  }
};