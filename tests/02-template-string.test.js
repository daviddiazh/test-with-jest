import { getSaludo } from "../src/bases-pruebas/02-template-string";

describe('Pruebas en 02-template-strings', () => {

    test('getSaludo debe retornar Hola David', () => {
        const name = 'David';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);
    })

})