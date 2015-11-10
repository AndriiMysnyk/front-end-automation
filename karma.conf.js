module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'jasmine'],

        files: [
            'app/*.js',
            'specs/*.js'
        ],

        preprocessors: {
            'specs/*.js': ['browserify'],
            'app/*.js': ['browserify', 'coverage']
        },

        autoWatch: true,
        browsers: ['Chrome', 'PhantomJS'],
        reporters: ["mocha", "coverage"],
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        browserify: {
            debug: true
        },
        plugins : [
            'karma-browserify',
            'karma-mocha-reporter',
            'karma-js-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};