const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const helpers = require("./helpers");
const AngularCompilerPlugin = require("@ngtools/webpack").AngularCompilerPlugin;

module.exports = (env = {}) => {
    return webpackMerge(commonConfig(env), {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        "@ngtools/webpack"
                    ]
                }
            ]
        },

        plugins: [
            new AngularCompilerPlugin({
                tsConfigPath: helpers.root("tsconfig.json"),
                forkTypeChecker: true,
                skipCodeGeneration: true,
                sourceMap: false
            })
        ],
    });
};
