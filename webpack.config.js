var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './source/index.js',
	
	output: {
		path: path.join(__dirname,'public'),
		filename: 'bundle.js',
		publicPath: ''
	},

	devServer: {
		inline: true,
		contentBase: path.join(__dirname,'public'),
		port: 3000
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: '/node_modules/',
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			},
			{
				test: /\.css$/,
				exclude: '/node_modules/',
				loader: 'css-loader!autoprefixer-loader'
			},
			{
				test: /\.svg$/,
				loader: 'svg-react-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './source/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		})
	]
}