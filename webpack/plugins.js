const CONFIG =  require("./config");

const path = require("path");
const webpack = require("webpack");

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
    sourceMap: false,
    extractComments: true,
    uglifyOptions: {
        compress: {
            drop_console: true,
        }
    }
});

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyCssPlugin = new OptimizeCSSAssetsPlugin();

const SpritesmithPlugin = require("webpack-spritesmith");
const SpritePlugin = new SpritesmithPlugin({
    src: {
        cwd: path.resolve(__dirname, CONFIG.spriteImagesPath),
        glob: "*.png"
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

const SVGSpritemap = require("svg-spritemap-webpack-plugin");
const SVGSpritemapPlugin = new SVGSpritemap(path.resolve(__dirname, CONFIG.svgSourceFolder) + "**/*.svg", {
    output: {
        filename: CONFIG.svgOutputFile,
        svgo: {
            plugins: [{
                removeStyleElement: true
            }]
        }
    },
    sprite: {
        prefix: "svg-",
        gutter: 10,
        generate: {
            title: false
        }
    },
    styles: false
});


module.exports = {
    ProvidePlugin,
    CssExtractPlugin,
    MinifyJsPlugin,
    MinifyCssPlugin,
    SpritePlugin,
    SVGSpritemapPlugin
};