/**
 * Disable debug
 * =====================
 * Check if configs/config.js has debug to off
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import shell from "shelljs";
import yargs from "yargs";
import path from "path";
import { fileURLToPath } from "url";

const argv: any = yargs(process.argv.slice(2)).argv;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const path_config = `${__dirname}/../app/configs/config.ts`;

if (fs.existsSync(path_config)) {
	if (argv.enable) {
		shell.sed("-i", 'debug: "disabled"', 'debug: "enabled"', path_config);
	} else {
		shell.sed("-i", 'debug: "enabled"', 'debug: "disabled"', path_config);
	}
}
