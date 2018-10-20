const helpers = require("./helpers");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
    return {
        output: {
            path: helpers.root("dist"),
            publicPath: "/",
            filename: "[name].js",
            chunkFilename: "[name].chunk.js"
        },
        devtool: false,
        entry: {
            "app": "./app/main.ts"
        },
        resolve: {
            extensions: [".ts", ".js"],

            modules: [
                helpers.root("app"),
                helpers.root("node_modules")
            ],

            mainFields: [
                "es2015", "browser", "module", "main"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: "html-loader"
                },
                {
                    // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
                    // Removing this will cause deprecation warnings to appear.
                    test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                    parser: {system: true},
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "app/index.html"
            })
        ],

        devServer: {
            port: 8081,
            historyApiFallback: {
                disableDotRule: true,
                htmlAcceptHeaders: ["text/html", "application/xhtml+xml"]
            },
            stats: {
                assets: false,
                warnings: false
            },
        },

        mode: "development",

        node: {
            global: true,
            process: true,
            Buffer: false,
            crypto: false,
            module: false,
            clearImmediate: false,
            setImmediate: false,
            clearTimeout: true,
            setTimeout: true
        }
    }
};
