const CONFIG = require('./config');

const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    devtool: "source-map",
    entry: CONFIG.entryPoint,
    optimization: {
        minimizer: [
            plugins.MinifyJsPlugin,
            plugins.MinifyCssPlugin,
        ]
    },
    module: {
        rules: [
            loaders.FileLoader,
            loaders.FontsLoader,
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
        path: path.resolve(__dirname, CONFIG.jsOutputPath),
        filename: CONFIG.jsOutputTpl
    },
};