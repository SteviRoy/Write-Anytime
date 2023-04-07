const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['main'],
      }),
      new WebpackPwaManifest({
        name: 'Write Anytime',
        short_name: 'WriteAnytime',
        description: 'A text editor that runs in the browser and works offline.',
        background_color: '#212121',
        theme_color: '#212121',
        fingerprints: false,
        publicPath: './',
        crossorigin: null,
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
