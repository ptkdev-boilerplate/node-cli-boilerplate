/**
 * Translations
 * =====================
 * Switch translations
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const en = JSON.parse(readFileSync(`${__dirname}/../translations/en.json`, "utf8"));
const it = JSON.parse(readFileSync(`${__dirname}/../translations/it.json`, "utf8"));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: any = {
	en,
	it,
};

export { it, en };
export default translations;
