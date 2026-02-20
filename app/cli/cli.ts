#!/usr/bin/env node --no-warnings
/**
 * CLI
 * =====================
 * Command Line Interface
 *
 * Notes:
 * - The label uses the "hello" template string from `app/translations/en.json`.
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import helloWorld from "@functions/module";
import translate from "@translations/translate";
import logger from "@utils/logger";

const label = translate("hello", { name: "Patryk" });
const { app } = await helloWorld({ text: label });

logger.info(app());
