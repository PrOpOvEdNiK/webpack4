const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    devtool: "source-map",
    entry: {
        app: "./src/js/app.js"
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.SassLoader,
            loaders.FileLoader
        ]
    },
    plugins: [
        plugins.ProvidePlugin,
        plugins.CssExtractPlugin
    ],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js"
    },
};