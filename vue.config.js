const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/manifest.json', to: 'manifest.json' },
          { from: 'src/background.js', to: 'background.js' },
          { from: 'public/redirection.html', to: 'redirection.html' },
          { from: 'public/accueil.html', to: 'accueil.html' },
          { from: 'public/telechargement.html', to: 'telechargement.html' }
        ]
      })
    ]
  },
  pages: {
    popup: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'popup.html'
    },
    dev: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
};
