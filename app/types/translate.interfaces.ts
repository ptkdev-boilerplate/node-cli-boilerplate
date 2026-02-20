/**
 * Translate Interface
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

/**
 * Translate Interface
 * =====================
 *
 */
export interface TranslateParamsInterface {
	name?: string;
}

/**
 * TranslationDictionaryInterface
 * =====================
 *
 */
export type TranslationDictionaryInterface = Record<string, string>;

/**
 * TranslationsInterface
 * =====================
 *
 */
export interface TranslationsInterface {
	[key: string]: TranslationDictionaryInterface;
}
