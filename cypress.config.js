const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
	projectId: 'an2679',
	chromeWebSecurity: false,
	defaultCommandTimeout: 10000,
	watchForFileChanges: false,
	experimentalModifyObstructiveThirdPartyCode: true,
	video: false,
	reporter: 'nyan',
	retries: {
		runMode: 2,
		openMode: 0,
	},
	theme: 'dark',

	e2e: {
		baseUrl: 'http://automationexercise.com',
		async setupNodeEvents(on, config) {
			const bundler = createBundler({ plugins: [createEsbuildPlugin(config)] })
			on('file:preprocessor', bundler)
			await addCucumberPreprocessorPlugin(on, config)
			return config
		},
		setupNodeEvents(on, config) {
			on('task', {
				hello(message) {
					console.log(message)

					return null
				},
				readFileMaybe(filename) {
					if (fs.existsSync(filename)) {
						return fs.readFileSync(filename, 'utf8')
					}
					return null
				},
			})
		},
	},

	setupNodeEvents(on, config) {
		// implement node event listeners here
	},
})
