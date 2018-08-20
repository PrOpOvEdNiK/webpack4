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
            loader: "postcss-loader",
            options: {
                ident: 'postcss',
                plugins: [
                    require('precss')(),
                    require('autoprefixer')(),
                ]
            }
        },
        {
            loader: "resolve-url-loader"
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true,
                outputStyle: 'compressed',
                implementation: require("sass"),
                fiber: Fiber
            }
        }
    ]
};

const FileLoader = {
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: "file-loader",
            options: {
                name: '[name].[ext]',
                outputPath: '../dist/images',
                publicPath: '../images',
            }
        }
    ]
};

module.exports = {
    JSLoader: JSLoader,
    SassLoader: SassLoader,
    FileLoader: FileLoader,
};