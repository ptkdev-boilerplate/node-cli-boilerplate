/**
 * Module Types
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

interface ModuleInterface {
	text: string
}

interface ModuleResponseInterface {
	app(): void
}
