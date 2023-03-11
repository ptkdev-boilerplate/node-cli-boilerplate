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
import en from "@app/translations/en.json" assert { type: "json" };
import it from "@app/translations/it.json" assert { type: "json" };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: any = {
	en,
	it,
};

export { it, en };
export default translations;
