/**
 * Node Module
 * =====================
 *
 * Returns the provided text
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
 * Prints the provided text. Run with: npx @ptkdev/node-cli-boilerplate
 *
 * @interface [ModuleInterface ModuleResponseInterface](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/app/types/module.interfaces.ts)
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<ModuleResponseInterface>} (async) app() function that returns a string
 *
 */
const helloWorld = async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app,
	};
};

export default helloWorld;
