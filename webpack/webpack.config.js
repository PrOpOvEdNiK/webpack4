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
            loaders.FileLoader,
            loaders.JSLoader,
            loaders.SassLoader
        ]
    },
    plugins: [
        plugins.ProvidePlugin,
        plugins.CssExtractPlugin,
        plugins.SpritePlugin
    ],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js"
    },
};