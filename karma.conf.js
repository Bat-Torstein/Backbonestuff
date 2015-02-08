module.exports = function(config) {
  config.set({
    files: [
	  'js/specs/*.js'
    ],
    frameworks: ['jasmine', 'browserify'],

	reporters: ['progress','notify'],
	
	preprocessors: {
		'js/**/*.js' : ['browserify']
	},
	
    browsers: ['PhantomJS'],
	
	notifyReporter: {
      reportEachFailure: true,
      reportSuccess: false,
    },
	
	browserify: {
      transform: [ 'node-underscorify']
    },
	
	singleRun: true,
	autoWatch: false
  });
};