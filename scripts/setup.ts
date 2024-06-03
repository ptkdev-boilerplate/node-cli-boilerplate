/**
 * Setup
 * =====================
 * Replace package name, authors, url with others values.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import Logger from "@ptkdev/logger";
import replace from "replace-in-file";
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const setup = JSON.parse(readFileSync(`${__dirname}/../setup.json`, "utf8"));
const pkg = JSON.parse(readFileSync(`${__dirname}/../package.json`, "utf8"));
const logger = new Logger();

(async () => {
	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev-boilerplate\/node-cli-boilerplate/g,
			to: setup.github_full_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev\/node-cli-boilerplate/g,
			to: setup.github_full_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /githubusercontent.com\/ptkdev-boilerplate/g,
			to: setup.github_repository_url.replace("github.com", "githubusercontent.com"),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /githubusercontent.com\/ptkdev/g,
			to: setup.github_repository_url.replace("github.com", "githubusercontent.com"),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev-boilerplate/g,
			to: setup.github_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /github.com\/ptkdev/g,
			to: setup.github_repository_url,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /@ptkdev\/node-cli-boilerplate/g,
			to: setup.package_org !== "" ? `${setup.package_org}/${setup.package_name}` : setup.package_name,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /Node Command Line Interface Boilerplate/g,
			to: setup.display_name,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /Create node cli with this user friendly boilerplate. Use this respository as template for your new npm command line interface project/g,
			to: setup.description,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /Patryk Rzucidło \[@ptkdev\] <support@ptkdev.io> \(https:\/\/ptk.dev\)/g,
			to: setup.author,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /\[Patryk Rzucidło\]\(https:\/\/ptk.dev\) \(\[@PTKDev\]\(https:\/\/twitter.com\/ptkdev\)\) <\[support@ptkdev.io\]\(mailto:support@ptkdev.io\)>/g,
			to: setup.author_markdown,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: [".all-contributorsrc"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: /"projectName": "ptkdev-boilerplate\/node-cli-boilerplate"/g,
			to: `"projectName": "${setup.github_full_repository_url.replace("github.com/", "")}"`,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: [".all-contributorsrc"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: /"projectOwner": "ptkdev"/g,
			to: `"projectOwner": "${setup.github_nickname}"`,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: [".github/**/*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: /ptkdev/g,
			to: setup.github_nickname,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /node-cli-boilerplate/g,
			to: setup.package_name.replace(setup.package_org),
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["**/*", ".*", "**/.*"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts", ".all-contributorsrc"],
			from: /support@ptkdev.io/g,
			to: setup.email,
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}

	try {
		await replace.sync({
			files: ["package.json"],
			ignore: ["node_modules/**/*", "setup.json", "package-lock.json", "scripts/setup.ts"],
			from: pkg.version,
			to: "1.0.0",
		});
	} catch (error) {
		logger.error(JSON.stringify(error));
	}
})();
