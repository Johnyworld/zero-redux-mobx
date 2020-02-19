const path = require('path');

module.exports = {
    name: 'redux',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: './index'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 chrome versions'] },
                                debug: true
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    plugins: ['react-hot-loader/babel']
                },
                exclude: path.join(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    }
};
