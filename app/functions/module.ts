/**
 * Node Module
 * =====================
 *
 * Show hello world text
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import type { ModuleInterface, ModuleResponseInterface } from "@interface/module.interfaces";

/**
 * Hello World
 * =====================
 *
 * Print hello-world, run with: npx @ptkdev/node-cli-boilerplate
 *
 * @interface [ModuleInterface ModuleResponseInterface](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/app/types/module.interfaces.ts)
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<ModuleResponseInterface>} (async) app() function that return string
 *
 */
const m = async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app,
	};
};

export default m;
