#! /usr/bin/env node
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
import m from "@app/functions/module";
import translate from "@translations/translate";
import logger from "@app/utils/logger";

(async () => {
	const label = translate("hello", { name: "World" }); // This show "Hello World"! Is a literal template string from en.json
	const { app } = await m({ text: label });

	logger.info(app());
})();
