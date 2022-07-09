import { retornaArreglo } from "../src/bases-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar las mismas letras y números', () => {
        
        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

    });

    test('Debe retornar los tipos de datos [string, number]', () => {

        const [ letters, numbers ] = retornaArreglo()

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

    });

})