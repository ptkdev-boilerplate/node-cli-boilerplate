/**
 * CLI Module
 * =====================
 * Show hello world text
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import type { ModuleInterface, ModuleResponseInterface } from "@app/types/module.type";

/**
 * Hello World
 * =====================
 * Print hello-world
 *
 * @param {string} text - input string
 *
 * @return {Promise<ModuleResponseInterface>} fn - output string (async), run app()
 *
 */
const m = async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app
	};
};

export default m;
