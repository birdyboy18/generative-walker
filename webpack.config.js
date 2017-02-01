const webpack = require('webpack');

const config = {
	entry: './app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [

		]
	},
	devServer: {
		contentBase: './',
		hot: true,
		port: 9000
	}
};

module.exports = config;
