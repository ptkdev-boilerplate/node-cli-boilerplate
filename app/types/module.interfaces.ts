/**
 * Node Module (Library) Boilerplate
 * =====================
 *
 * Create your Node module (library) with this user-friendly boilerplate.
 * Use this repository as a template for your new Node library/module.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

/**
 * ModuleInterface
 * =====================
 *
 */
export interface ModuleInterface {
	/**
	 * Input text
	 * =====================
	 * Set the text.
	 *
	 * @interface [ModuleInterface](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/app/types/module.interfaces.ts)
	 *
	 * @param {string} text - input text
	 *
	 */
	text: string;
}

/**
 * ModuleResponseInterface
 * =====================
 *
 */
export interface ModuleResponseInterface {
	/**
	 * Output text
	 * =====================
	 * Get the text.
	 *
	 * @interface [ModuleResponseInterface](https://github.com/ptkdev-boilerplate/node-cli-boilerplate/blob/main/app/types/module.interfaces.ts)
	 *
	 * @return {Function} app - call app() to get the output text
	 *
	 */
	app(): string;
}
