export default {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
	},
	moduleNameMapper: {
		"^@app/(.*)\\.js$": "<rootDir>/app/$1.ts",
		"^@app/(.*)$": "<rootDir>/app/$1.ts",
		"^@functions/(.*)\\.js$": "<rootDir>/app/functions/$1.ts",
		"^@functions/(.*)$": "<rootDir>/app/functions/$1.ts",
		"^@translations/(.*)\\.js$": "<rootDir>/app/translations/$1.ts",
		"^@translations/(.*)$": "<rootDir>/app/translations/$1.ts",
		"^@routes/(.*)\\.js$": "<rootDir>/app/routes/$1.ts",
		"^@routes/(.*)$": "<rootDir>/app/routes/$1.ts",
		"^@utils/(.*)\\.js$": "<rootDir>/app/utils/$1.ts",
		"^@utils/(.*)$": "<rootDir>/app/utils/$1.ts",
		"^@configs/(.*)\\.js$": "<rootDir>/app/configs/$1.ts",
		"^@configs/(.*)$": "<rootDir>/app/configs/$1.ts",
		"^@interface/(.*)\\.js$": "<rootDir>/app/types/$1.ts",
		"^@interface/(.*)$": "<rootDir>/app/types/$1.ts",
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
};
