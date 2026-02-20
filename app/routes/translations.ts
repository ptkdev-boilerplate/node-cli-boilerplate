/**
 * Translations
 * =====================
 * Switch translations
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import type { TranslationDictionaryInterface, TranslationsInterface } from "@interface/translate.interfaces";
import { readFileSync } from "node:fs";

const en = JSON.parse(
	readFileSync(new URL("../translations/en.json", import.meta.url), { encoding: "utf-8" }),
) as TranslationDictionaryInterface;

const it = JSON.parse(
	readFileSync(new URL("../translations/it.json", import.meta.url), { encoding: "utf-8" }),
) as TranslationDictionaryInterface;

const translations: TranslationsInterface = {
	en,
	it,
};

export { en, it };
export default translations;
