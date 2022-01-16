module.exports = {
	server: {
		// http://localhost:[PORT]
		port: process.env.PORT || 5000,
	},

	// Default language
	language: process.env.LANGUAGE || "en",

	// Debug
	debug: process.env.DEBUG || true,

	// LOGS
	// See: https://github.com/ptkdev/ptkdev-logger
	logger: {
		path: {
			debug_log: "./logs/debug.log",
			error_log: "./logs/errors.log",
		},
		language: "en",
		colors: true,
		debug: process.env.LOGGER || "enabled",
		info: process.env.LOGGER || "enabled",
		warning: process.env.LOGGER || "enabled",
		error: process.env.LOGGER || "enabled",
		sponsor: process.env.LOGGER || "enabled",
		write: process.env.LOGGER_WRITE || false,
		type: "log",
	},
};
