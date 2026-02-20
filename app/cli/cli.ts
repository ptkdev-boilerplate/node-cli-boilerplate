#!/usr/bin/env node --no-warnings
/**
 * CLI
 * =====================
 * Command Line Interface - This show "Hello Patryk"! Is a literal template string from en.json
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import helloWorld from "@functions/module";
import translate from "@translations/translate";
import logger from "@utils/logger";

const label = translate("hello", { name: "Patryk" }); // This show "Hello Patryk"! Is a literal template string from en.json
const { app } = await helloWorld({ text: label });

logger.info(app());
