const CONFIG = require("./config");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
                ["@babel/plugin-proposal-class-properties"]
            ],
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
                ident: "postcss",
                plugins: [
                    require("autoprefixer")(),
                    require("css-mqpacker")(),
                    require("cssnano")()
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
                outputStyle: "compressed",
                implementation: require("sass"),
                fiber: require("fibers")
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
                name: CONFIG.fileLoaderNameTpl,
                outputPath: CONFIG.fileLoaderOutputPath,
                publicPath: CONFIG.fileLoaderPublicPath,
            }
        }
    ]
};

const FontsLoader = {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
        loader: "file-loader",
        options: {
            name: CONFIG.fileLoaderNameTpl,
            outputPath: CONFIG.fontsLoaderOutputPath,
            publicPath: CONFIG.fontsLoaderPublicPath
        }
    }]
};

module.exports = {
    JSLoader,
    SassLoader,
    FileLoader,
    FontsLoader
};