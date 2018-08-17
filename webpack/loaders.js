const Fiber = require('fibers');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env']
        }
    }
};

const SassLoader = {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader
        },
        {
            loader: "css-loader"
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true,
                implementation: require("sass"),
                fiber: Fiber
            }
        }
    ]
};

module.exports = {
    JSLoader: JSLoader,
    SassLoader: SassLoader,
};