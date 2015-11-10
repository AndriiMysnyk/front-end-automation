var filesystem = require("fs");

module.exports = function(grunt) {
	grunt.task.registerMultiTask('coverageLinks', 'Coverage reports links collecting.', function() {
		
		var dir = this.data.src || './coverage',
			outputFile = this.data.dst || './coverage.js',
			reports = [];

		filesystem.readdirSync(dir).forEach(function(file) {
			var match = file.match(/(.*) \((.*)\)/);
			reports.push({
				title: match[0],
				browser: match[1],
				os: match[2],
				href: dir + '/' + match[0] + '/index.html'
			});
		});

		filesystem.writeFile(outputFile,
			'var coverage = ' + JSON.stringify(reports) + ';');
	});
};