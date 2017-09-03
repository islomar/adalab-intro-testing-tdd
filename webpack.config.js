const path = require("path");
const webpack = require("webpack");

module.exports = {

    entry: {
        script: path.resolve(__dirname, "./entry.js")
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /(\/node_modules\/|test\.js|\.spec\.js$)/
            }
        ]
    },

    output: {
      path: path.join(__dirname, 'static'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },

    resolve: {
        extensions: [".js"],
        modules: [
            __dirname,
            path.resolve(__dirname, "./node_modules")
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ],

    target: 'node'

};
