/**
 * Created by prism on 2/1/2017.
 */
var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: [
        './bunny/app.jsx'
    ],
    output : {
        path: path.resolve('./static/js/bundles/'),
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    plugins: [
	new webpack.DefinePlugin({
           'process.env': {
         NODE_ENV: JSON.stringify('production')
        }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
		compress: { warnings: false },
      		comments: false,
      		mangle: true,
      		minimize: true
	}),
	new BundleTracker({filename: './webpack-stats.json'})
    ]
};
