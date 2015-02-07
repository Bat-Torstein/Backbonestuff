module.exports = function(config) {
  config.set({
    files: [
	  'dist/js/app.js',
      'js/specs/**/*.js',
    ],
    frameworks: ['jasmine'],

    preprocessors: {
      'js/spec/**/*.js': ['coverage', 'browserify']
    },
	reporters: ['progress','notify'],
	
    browsers: ['PhantomJS'],
	
	notifyReporter: {
      reportEachFailure: true,
      reportSuccess: false,
    },
	
	singleRun: true
  });
};