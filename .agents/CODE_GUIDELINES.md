# Code Guidelines (for AI/LLM agents)

These rules are mandatory when editing this repository. Keep changes minimal, consistent with the existing codebase, and compliant with formatting/linting.

## Language and Formatting

- Use TypeScript.
- Follow the repository formatting and linting rules (see `.prettierrc` and `.eslintrc.cjs`).

## Naming Conventions

- Functions: `camelCase`, use explicit/descriptive names (no abbreviations).
- Variables: `snake_case`, use explicit/descriptive names (no abbreviations).
- Constants: `SNAKE_CASE` (UPPERCASE), use explicit/descriptive names (no abbreviations).

## Project Structure Rules

- Every function must live in its own file under `app/functions/`.
- Every function must have tests under `app/tests/` mirroring the same folder structure.
- Every function must have its own TypeScript interfaces declared in `app/types/`.
- Never use `any`.
- All user-facing strings/text must be stored in `app/translations/*.json` (do not hardcode strings in code).
- Ensure every TypeScript file exports something. Prefer having both a named export and a default export when it makes sense.

## Code Comments (JSDoc)

- Write comments in English.
- Do not write comments in the middle of code blocks. Move existing inline comments into the JSDoc block when possible.
- Every function must have a JSDoc block immediately above its declaration.
- Use the following template (add more details if needed, keeping the same style):

```
/**
 * Hello World
 * =====================
 *
 * Print hello-world, run with: npx @ptkdev/node-cli-boilerplate
 *
 * @interface [HellowrldInterface HellowrldResponseInterface]
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<HellowrldResponseInterface>} (async) app() function that return string
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 * @license: MIT License
 *
 */
const helloworld = async ({ text }: HellowrldInterface): Promise<HellowrldResponseInterface> => {
	const app = () => text;

	return {
		app,
	};
};
```

## Changelog Updates

- Always update `CHANGELOG.md` when you make relevant changes.
- In `CHANGELOG.md`, version headings must never include the `-nightly.0` suffix.
- The `all-shields` block must appear only under the latest version section.

## Readme Updates

- Update docs in `README.md` when you make relevant changes.
