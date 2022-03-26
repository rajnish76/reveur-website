const path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.jsx'
	},
	output: {
		filename: '[name].[contenthash].js',
		publicPath: process.env.ASSET_PATH || '/',
		path: path.resolve('./build')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.(scss|css)/,
				oneOf: [
					{
						resourceQuery: /^\?global$/,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: 'css-loader'
							},
							{
								loader: 'sass-loader'
							}
						]
					},
					{
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: 'css-loader',
								options: {
									modules: true,
									localIdentName: '[local]_[hash:base64:5]'
								}
							},
							{
								loader: 'sass-loader'
							}
						]
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
							strictMath: false,
							modifyVars: { '@primary-color': '#51A9FB' }
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: ['link:href']
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/'
						}
					}
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|xlsx)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
			// favicon: './src/assets/img/favicon.png',
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Ignore all locale files of moment.js
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true
	}
};
