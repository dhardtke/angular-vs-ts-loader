const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env = {}) => {
    return webpackMerge(commonConfig(env), {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true, // disable type checker - we will use it in fork plugin
                            }
                        },
                        "angular2-template-loader",
                        "angular-router-loader"
                    ]
                }
            ]
        },
        
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
        ],
    });
};
