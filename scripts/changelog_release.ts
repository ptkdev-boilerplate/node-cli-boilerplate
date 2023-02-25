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
import * as fs from "fs";
import Logger from "@ptkdev/logger";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const logger = new Logger();

if (fs.existsSync(`${__dirname}/../CHANGELOG.md`)) {
	fs.readFile(`${__dirname}/../CHANGELOG.md`, "utf8", (error, data) => {
		if (error) {
			logger.error(JSON.stringify(error));
		}

		const changelog = data.match(/\n([\s\S]*)-->\n/gm);
		changelog?.forEach((c) => {
			fs.writeFile(`${__dirname}/../CHANGELOG_RELEASE.txt`, c, function writeJSON(error) {
				if (error) {
					logger.error(JSON.stringify(error));
				}
			});
		});
	});
}
