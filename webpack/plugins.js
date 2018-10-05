const CONFIG =  require('./config');

const path = require('path');
const webpack = require('webpack');

const ProvidePlugin = new webpack.ProvidePlugin(CONFIG.providePlugin);

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssExtractPlugin = new MiniCssExtractPlugin({
    filename: CONFIG.cssOutputTpl,
    chunkFilename: CONFIG.cssOutputTplExtra
});

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MinifyJsPlugin = new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
    extractComments: true
});

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyCssPlugin = new OptimizeCSSAssetsPlugin();

const SpritesmithPlugin = require('webpack-spritesmith');
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

const SVGSpritemap = require('svg-spritemap-webpack-plugin');
const SVGSpritemapPlugin = new SVGSpritemap({
    src: path.resolve(__dirname, CONFIG.svgSourceFolder) + '/*.svg',
    filename: CONFIG.svgOutputFile,
    styles: path.resolve(__dirname, CONFIG.spriteGenSvg),
    gutter: 10,
    prefix: 'svg-',
    svgo: {
        plugins: [{
            removeStyleElement: true
        }]
    }
});


module.exports = {
    ProvidePlugin,
    CssExtractPlugin,
    MinifyJsPlugin,
    MinifyCssPlugin,
    SpritePlugin,
    SVGSpritemapPlugin
};