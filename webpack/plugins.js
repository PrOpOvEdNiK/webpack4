const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ProvidePlugin = new webpack.ProvidePlugin({
    "$": "jquery",
    "jQuery": "jquery"
});

const CssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "css/[id].css"
});


module.exports = {
    ProvidePlugin: ProvidePlugin,
    CssExtractPlugin: CssExtractPlugin
};