module.exports = {
	env: { node: true },
	extends: '@scitizen/eslint-config/ts',
	parserOptions: {
		project: require( './tsconfig.json' ).references.map( t => t.path ),
	},
};
