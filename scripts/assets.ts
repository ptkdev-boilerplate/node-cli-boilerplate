/**
 * Copy assets
 * =====================
 * Copy runtime assets to dist folder.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import path from "path";
import shell from "shelljs";
import { fileURLToPath } from "url";

const script_dirname = path.dirname(fileURLToPath(import.meta.url));

const DIST_TRANSLATIONS_PATH = path.join(script_dirname, "..", "dist", "translations");
const APP_TRANSLATIONS_GLOB = path.join(script_dirname, "..", "app", "translations", "*.json");

if (!fs.existsSync(DIST_TRANSLATIONS_PATH)) {
	shell.mkdir("-p", DIST_TRANSLATIONS_PATH);
}

shell.cp("-Rf", APP_TRANSLATIONS_GLOB, DIST_TRANSLATIONS_PATH);
