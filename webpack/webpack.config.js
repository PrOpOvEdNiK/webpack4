const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: {
        app: "./src/js/app.js"
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.SassLoader
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