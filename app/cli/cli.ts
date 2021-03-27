#!/usr/bin/env node
/**
 * CLI
 * =====================
 * Command Line Interface
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import m from "./module";

(async () => {
	const { app } = await m({ text: "hello-world" });

	await console.log(app());
})();
