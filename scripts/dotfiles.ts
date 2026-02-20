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
import { readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

type ShieldBadgeInterface = {
	[key: string]: unknown;
};

type ShieldSectionInterface = {
	id: string;
	badges: ShieldBadgeInterface[];
};

type AllShieldsrcInterface = {
	files: string[];
	shields: ShieldSectionInterface[];
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const json_shieldsrc = JSON.parse(readFileSync(`${__dirname}/../.all-shieldsrc`, "utf8")) as AllShieldsrcInterface;
const header_badge = json_shieldsrc.shields[0];
json_shieldsrc.shields = [];

const json_sponsors_response = await fetch(
	"https://raw.githubusercontent.com/ptkdev/dotfiles/main/sponsors-badges.json",
);
const json_sponsors = (await json_sponsors_response.json()) as ShieldSectionInterface;

const json_projects_response = await fetch(
	"https://raw.githubusercontent.com/ptkdev/dotfiles/main/projects-badges.json",
);
const json_projects = (await json_projects_response.json()) as ShieldSectionInterface[];

json_shieldsrc.shields.push(header_badge);
json_shieldsrc.shields.push(json_sponsors);
json_projects.map((project) => json_shieldsrc.shields.push(project));

writeFileSync(`${__dirname}/../.all-shieldsrc`, JSON.stringify(json_shieldsrc));
