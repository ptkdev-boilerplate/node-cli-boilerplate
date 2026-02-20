/**
 * Jest Tests
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import helloWorld from "@functions/module";

test("show hello world", async () => {
	const { app } = await helloWorld({ text: "hello-world" });
	expect(app()).toBe("hello-world");
});
