module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^~/(.+)$': '<rootDir>/src/$1',
	},
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.spec.json',
			compiler: 'ttypescript',
		},
	},
	collectCoverageFrom: [
		'src/**/*.{[jt]s}',
	],
};
