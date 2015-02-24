module.exports = function(config) {
  config.set({
    files: [
	  'js/specs/*.js'
    ],
    frameworks: ['jasmine', 'browserify'],

	reporters: ['progress','notify','coverage'],
	
	preprocessors: {
		'js/**/*.js' : ['browserify']
	},
	
    browsers: ['PhantomJS'],
	
	notifyReporter: {
      reportEachFailure: true,
      reportSuccess: false,
    },
	
	coverageReporter: {
	    reporters: [
            {type : 'text'},
            { type: 'html', dir: 'coverage/' }
	        ]
    },
	
	browserify: {
      transform: [ 'node-underscorify','istanbulify']
    },
	
	singleRun: true,
	autoWatch: false
  });
};