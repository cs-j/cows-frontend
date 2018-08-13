const webpack = require('webpack');
const path = require('path');

module.exports = {
    // mode: 'development',
    'entry': './src/index.js',
    'output': {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    'module': {
        'rules': [
            {
                'test': /\.(js|jsx)$/,
                'exclude': /node_modules/,
                'use': {
                    'loader': 'babel-loader',
                    'options': {
                        'presets': [
                            'env',
                            'react'
                        ]
                    }
                }
            },
            {
                'test': /\.css$/,
                'use': [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
               'test': /\.(png|svg|jpg|gif)$/,
               'use': [
                 'file-loader'
               ]
            }
        ]
    }
}
