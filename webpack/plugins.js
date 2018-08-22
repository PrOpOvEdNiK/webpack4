const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');

const ProvidePlugin = new webpack.ProvidePlugin({
    "$": "jquery",
    "jQuery": "jquery"
});

const CssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "css/[id].css"
});

const MinifyJsPlugin = new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true
});

const MinifyCssPlugin = new OptimizeCSSAssetsPlugin();

const SpritePlugin = new SpritesmithPlugin({
    src: {
        cwd: path.resolve(__dirname, '../src/images/icons'),
        glob: '*.png'
    },
    target: {
        image: path.resolve(__dirname, '../src/images/sprite.png'),
        css: path.resolve(__dirname, '../src/sass/mixin/sprite.scss')
    },
    apiOptions: {
        cssImageRef: "../src/images/sprite.png"
    },
    spritesmithOptions: {
        padding: 10
    }
});


module.exports = {
    ProvidePlugin: ProvidePlugin,
    CssExtractPlugin: CssExtractPlugin,
    MinifyJsPlugin: MinifyJsPlugin,
    MinifyCssPlugin: MinifyCssPlugin,
    SpritePlugin: SpritePlugin
};