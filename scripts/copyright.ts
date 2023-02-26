/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Update year in readme and license
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import Logger from "@ptkdev/logger";
import replace from "replace-in-file";
const logger = new Logger();

try {
	const regex_input = new RegExp(`(Copyright \\(c\\) )(\\d{4})`, "g");

	await replace.sync({
		files: ["*.md"],
		// @ts-ignore
		processor: (input) => input.replace(regex_input, `$1${new Date().getFullYear()}`),
	});
} catch (error) {
	logger.error(JSON.stringify(error));
}

try {
	const regex_input = new RegExp(`(Copyleft \\(c\\) )(\\d{4})`, "g");

	await replace.sync({
		files: ["*.md"],
		// @ts-ignore
		processor: (input) => input.replace(regex_input, `$1${new Date().getFullYear()}`),
	});
} catch (error) {
	logger.error(JSON.stringify(error));
}
