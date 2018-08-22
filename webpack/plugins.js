const CONFIG =  require('./config');

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');

const ProvidePlugin = new webpack.ProvidePlugin(CONFIG.providePlugin);

const CssExtractPlugin = new MiniCssExtractPlugin({
    filename: CONFIG.cssOutputTpl,
    chunkFilename: CONFIG.cssOutputTplExtra
});

const MinifyJsPlugin = new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
    extractComments: true
});

const MinifyCssPlugin = new OptimizeCSSAssetsPlugin();

const SpritePlugin = new SpritesmithPlugin({
    src: {
        cwd: path.resolve(__dirname, CONFIG.spriteImagesPath),
        glob: '*.png'
    },
    target: {
        image: path.resolve(__dirname, CONFIG.spriteGenPng),
        css: path.resolve(__dirname, CONFIG.spriteGenScss)
    },
    apiOptions: {
        cssImageRef: CONFIG.spriteGenPng
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