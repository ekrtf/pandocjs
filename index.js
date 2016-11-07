#!/bin/env node

'use strict';

const fs = require('fs');
require('shelljs/global');

// TODO: wrap this in a function that takes arguments

exec('mkdir -p ../_converted');

fs.readdir('../doc', function(error, files) {
	if (error) throw error;

	files.forEach(function(file) {
		const fileName = file.split('.')[0];
		console.log(`converting ${ fileName }...`);
		exec(`pandoc -s -S ../doc/${ file } -o ../_converted/${ fileName }.docx`);
	});
	
	console.log('done.');
});

