/**
 * This is a sample mock file. Mock files are replacement for source files that may be used during unit test to isolate application/library components from one another.
 * To use it, in place of `./example.ts` or `./example.js` call `jest.mock('./example`)` before importing it.
 *
 * @see <https://jestjs.io/docs/en/manual-mocks>.
 * @see ../example.ts - The associated source file.
 * @kind DEMO FILE
 */

export class Foo extends jest.fn() {
	public bar = jest.fn();
}
