module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "react-hooks"],
	rules: {
		// indent: ["error", 2],
		// "linebreak-style": ["error", "windows"],
		"linebreak-style": 0,
		quotes: ["error", "double", { avoidEscape: true }],
		semi: ["error", "always"],
		// "no-empty-function": "off",
		// "react/display-name": "off",
		"react/prop-types": "off",
		// "no-unused-vars": 1,
		"no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
