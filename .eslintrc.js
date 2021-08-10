module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"airbnb",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"prettier"
	],
	"rules": {
		"import/no-unresolved": 0,
		"react/jsx-filename-extension": [1, {
			"extensions": [
				".ts",
				".tsx"
			]
		}],
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"trailingComma": "all",
				"arrowParens": "avoid",
				"endOfLine": "auto"
			}
		],
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": ["error"],
		"import/extensions": ["error", "never"],
		"react/prop-types": 0,
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": ["error"]
	}
};