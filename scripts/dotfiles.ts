/**
 * Update shieldsrc
 * =====================
 * Get values from other repository and update shieldsrc
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fetch from "node-fetch";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const json_shieldsrc = JSON.parse(readFileSync(`${__dirname}/../.all-shieldsrc`, "utf8"));
const header_badge = json_shieldsrc.shields[0];
json_shieldsrc.shields = [];

const json_sponsors_response = await fetch(
	"https://raw.githubusercontent.com/ptkdev/dotfiles/main/sponsors-badges.json",
);
const json_sponsors: any = await json_sponsors_response.json();

const json_projects_response = await fetch(
	"https://raw.githubusercontent.com/ptkdev/dotfiles/main/projects-badges.json",
);
const json_projects: any = await json_projects_response.json();

json_shieldsrc.shields.push(header_badge);
json_shieldsrc.shields.push(json_sponsors);
json_projects.map((project: any) => json_shieldsrc.shields.push(project));

writeFileSync(`${__dirname}/../.all-shieldsrc`, JSON.stringify(json_shieldsrc));
