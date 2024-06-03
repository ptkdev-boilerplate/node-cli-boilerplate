import * as dotenv from "dotenv";
dotenv.config();

export default {
	// Default language i18n (from /app/translations/)
	language: process.env.LANGUAGE || "en", // available: en | it

	// LOGS
	// See: https://github.com/ptkdev/ptkdev-logger
	logger: {
		path: {
			debug_log: process.env.LOGGER_DEBUGLOG_PATH || "./logs/debug.log",
			error_log: process.env.LOGGER_ERRORLOG_PATH || "./logs/errors.log",
		},
		language: process.env.LOGGER_LANGUAGE || "en",
		colors: process.env.LOGGER_COLORS || true,
		debug: process.env.LOGGER_DEBUG || process.env.DEBUG || "enabled",
		info: process.env.LOGGER_INFO || "enabled",
		warning: process.env.LOGGER_WARNING || "enabled",
		error: process.env.LOGGER_ERROR || "enabled",
		sponsor: process.env.LOGGER_SPONSOR || "enabled",
		write: process.env.LOGGER_WRITE || false,
		type: process.env.LOGGER_TYPE || "log",
	},
};
