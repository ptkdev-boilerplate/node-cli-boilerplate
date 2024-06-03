#! /usr/bin/env node --no-warnings --experimental-specifier-resolution=node
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
import m from "@functions/module";
import translate from "@translations/translate";
import logger from "@utils/logger";

const label = translate("hello", { name: "Patryk" }); // This show "Hello Patryk"! Is a literal template string from en.json
const { app } = await m({ text: label });

logger.info(app());
