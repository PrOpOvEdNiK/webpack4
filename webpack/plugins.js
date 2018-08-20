const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpritesmithPlugin = require('webpack-spritesmith');

const ProvidePlugin = new webpack.ProvidePlugin({
    "$": "jquery",
    "jQuery": "jquery"
});

const CssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "css/[id].css"
});

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
    SpritePlugin: SpritePlugin
};