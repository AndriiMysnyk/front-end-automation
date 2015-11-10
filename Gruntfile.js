module.exports = function(grunt) {
	'use strict';
	var path = require('path');

	var appPath = 'app/';
	var buildPath = "build/";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			build: {
				files: appPath + '/*',
				tasks: ['default']
			},
			test: {
				files: [appPath + '*.js', 'specs/*.js'],
				tasks: ['karma:unit:run']
			}
		},

		jshint: {
            all: [appPath + '*.js']
        },

		postcss: {
			options: {
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'})
				]
			},
			dist: {
				src: appPath + 'css/*.css',
				dest: buildPath + 'css/styles.css'
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				background: true,
				singleRun: false
			},
			ci: {
				configFile: "karma.conf.js",
				singleRun: true
			}
		},

		browserify: {
			main: {
				src: appPath + '*.js',
				dest: buildPath + 'app.js',
				ignore: appPath + 'index.js'
			}
		},

		copy: {
			main: {
				files: [
					{ src: [appPath + 'index.js'], dest: buildPath + 'index.js' }
				]
			}
		},

		coverageLinks: {
			main: {
				src: './coverage',
				dst: buildPath + 'coverage.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadTasks('./tasks');

	grunt.registerTask('default', ['postcss', 'copy:main', 'browserify', 'karma:ci', 'coverageLinks', 'watch:build']);
	grunt.registerTask('test', [ 'karma:unit', 'watch:test' ]);
};