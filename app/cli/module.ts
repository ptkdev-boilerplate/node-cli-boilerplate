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
import "./module.d";

export default async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app
	};
};
