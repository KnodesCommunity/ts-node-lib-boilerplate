/**
 * This is a sample unit test file for `./example`. You may [mock](https://jestjs.io/docs/en/manual-mocks) dependencies other than `./example.ts` to
 * isolate its behavior from other application/library code
 *
 * @kind DEMO FILE
 */

import { Foo } from './example';

it( 'Spec', () => {
	expect( new Foo() ).toBeInstanceOf( Foo );
} );
