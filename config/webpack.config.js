const webpack = require('webpack'); //to access built-in plugins
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const path = require('path');
const isProd = false;

const METADATA = {
    title: 'Vlinker 2',
    baseUrl: '/'
};

const config = {
    //entry: './path/to/my/entry/file.js',
    //b: ["./app/entry-b1", "./app/entry-b2"]
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor':    './src/vendor.ts',
        'main':      './src/main.ts'
    },
    output: {
        path: path.resolve('www/assets/js'),
        filename: "[name].js", // for multiple entry points
        //filename: "[chunkhash].js", // for long term caching
        publicPath: "assets/js/", // string
        //publicPath: "https://cdn.example.com/",
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                use: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: ['index.html']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'www/../../../index.html',
            title: METADATA.title,
            chunksSortMode: 'dependency',
            //inject: 'head',
            metadata: METADATA
        }),
        new CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
        }),
        new CommonsChunkPlugin({
            name: 'main',
            chunks: ['main'],
            minChunks: module => /node_modules\//.test(module.resource)
        }),
        new CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ])
    ],
    node: {
        global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};

module.exports = config;