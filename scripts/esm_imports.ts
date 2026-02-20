/**
 * Fix ESM imports
 * =====================
 * Post-build step that makes Node ESM runtime happy by appending ".js" to
 * extensionless relative import/export specifiers in dist output.
 *
 * This keeps TypeScript sources clean (no ".js" suffix) while ensuring the
 * emitted JavaScript can run under Node's ESM loader.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const script_dirname = path.dirname(fileURLToPath(import.meta.url));

const DIST_PATH = path.join(script_dirname, "..", "dist");

const getAllFiles = (directory_path: string): string[] => {
	const entries = fs.readdirSync(directory_path, { withFileTypes: true });

	return entries.flatMap((entry) => {
		const entry_path = path.join(directory_path, entry.name);
		if (entry.isDirectory()) {
			return getAllFiles(entry_path);
		}

		return [entry_path];
	});
};

const shouldAppendJs = (specifier: string): boolean => {
	if (!specifier.startsWith("./") && !specifier.startsWith("../")) {
		return false;
	}

	if (specifier.includes("?") || specifier.includes("#")) {
		return false;
	}

	if (specifier.endsWith("/")) {
		return false;
	}

	const already_has_extension = /\.(cjs|mjs|js|json|node)$/i.test(specifier);
	if (already_has_extension) {
		return false;
	}

	return true;
};

const rewriteSpecifier = (specifier: string): string => {
	return shouldAppendJs(specifier) ? `${specifier}.js` : specifier;
};

const rewriteEsmImports = (file_content: string): string => {
	// import ... from "./x" / export ... from "./x"
	const FROM_REGEX = /(\b(?:import|export)\b[^\n]*?\bfrom\s*)(["'])(\.{1,2}\/[^"']+)(\2)/g;
	// dynamic import("./x")
	const DYNAMIC_IMPORT_REGEX = /(\bimport\s*\(\s*)(["'])(\.{1,2}\/[^"']+)(\2\s*\))/g;

	file_content = file_content.replace(FROM_REGEX, (_match, prefix, quote, specifier, suffix) => {
		const updated_specifier = rewriteSpecifier(specifier);
		return `${prefix}${quote}${updated_specifier}${suffix}`;
	});

	file_content = file_content.replace(DYNAMIC_IMPORT_REGEX, (_match, prefix, quote, specifier, suffix) => {
		const updated_specifier = rewriteSpecifier(specifier);
		return `${prefix}${quote}${updated_specifier}${suffix}`;
	});

	return file_content;
};

if (!fs.existsSync(DIST_PATH)) {
	process.exit(0);
}

const files_to_process = getAllFiles(DIST_PATH).filter((file_path) => file_path.endsWith(".js"));

for (const file_path of files_to_process) {
	const original_content = fs.readFileSync(file_path, { encoding: "utf-8" });
	const updated_content = rewriteEsmImports(original_content);

	if (updated_content !== original_content) {
		fs.writeFileSync(file_path, updated_content, { encoding: "utf-8" });
	}
}
