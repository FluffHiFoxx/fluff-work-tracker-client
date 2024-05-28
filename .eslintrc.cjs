module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"@electron-toolkit/eslint-config-ts/recommended",
		"@electron-toolkit/eslint-config-prettier",
		"prettier"
	],
	plugins: ["react", "prettier"],
	parser: "babel-eslint",
	rules: {
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-unused-vars": 0,
		"react/prop-types": 0,
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				printWidth: 80,
				trailingComma: "none",
				useTabs: true,
				tabWidth: 4
			}
		]
	}
};
