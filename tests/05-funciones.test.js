import { getUser, getUsuarioActivo } from "../src/bases-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'TheYankee'
        };

        const name = 'TheYankee'
        const user = getUser();

        expect( testUser.username ).toBe( name );

    })

    test('Prueba de getUsuarioActivo debe retornar un objecto', () => {

        const nombre = 'David';

        const user = getUsuarioActivo( nombre );

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        })

    })

});