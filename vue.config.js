const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin({
				patterns: [
					{ from: 'public/manifest.json', to: 'manifest.json' },
					{ from: 'src/background.js', to: 'background.js' },
				]
			})
		]
	},
	pages: {
		popup: {
			entry: 'src/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		},
		// dev: {
		// 	entry: 'src/main.js',
		// 	template: 'public/index.html',
		// 	filename: 'popup.html'
		// }
	}
};
