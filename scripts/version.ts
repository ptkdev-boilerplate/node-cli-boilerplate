/**
 * Version
 * =====================
 * Increment package.json version
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import Logger from "@ptkdev/logger";
import yargs from "yargs";
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(`${__dirname}/../package.json`, "utf8"));

const logger = new Logger();

const version = pkg.version.split(".");
let next_version, patch;

const argv: any = yargs(process.argv.slice(2)).argv;

switch (argv.cmd) {
	case "nightly":
		next_version = `${version[0]}.${version[1]}.${version[2]}.${Number(version[3]) + 1}`;
		break;

	case "nightly-next":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0]) + 1}-nightly.0`;
		break;

	case "beta":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0])}-beta.1`;
		break;

	case "main":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0])}`;
		break;

	default:
		next_version = "0.0.0";
		break;
}

pkg.version = next_version;

if (fs.existsSync(`${__dirname}/../package.json`)) {
	fs.writeFile(`${__dirname}/../package.json`, JSON.stringify(pkg), function writeJSON(error) {
		if (error) {
			logger.error(JSON.stringify(error));
		}
	});
}
