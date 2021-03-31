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
import type { ModuleInterface, ModuleResponseInterface } from "@app/types/module.type";

/**
 * Hello World
 * =====================
 *
 * Print hello-world, run with: `npx @ptkdev/node-cli-boilerplate`
 *
 * @interface [ModuleInterface ModuleResponseInterface](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/app/types/module.type.ts)
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<ModuleResponseInterface>} (async) app() function that return string
 *
 * @example
 * 1. In your node project run: `npm install @ptkdev/node-cli-boilerplate@latest --save`
 * 2. Usage (async):
 *
 * ```typescript
 * import m from "@ptkdev/node-cli-boilerplate";
 *
 * (async () => {
 * 	 const { app } = await m({ text: "hello-world" });
 *
 *	 console.log(app());
 * })();
 *
 * ```
 *
 */
const m = async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app
	};
};

export default m;
