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
import m from "@app/functions/module.js";
import translate from "@translations/translate.js";
import logger from "@app/utils/logger.js";

const label = translate("hello", { name: "Patryk" }); // This show "Hello Patryk"! Is a literal template string from en.json
const { app } = await m({ text: label });

logger.info(app());
