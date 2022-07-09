import { getHeroeByIdAsync } from "../src/bases-pruebas/09-promesas";


describe('Probando 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done(); 
                /*NOTA: se debe llamar el done() antes de finalizar el callback para que JEST espere a que finalice el proceso*/
            });

    });

    test('getHeroeByIdAsync debe obtener un error si el ID no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then( heroe => {

                expect( heroe ).toBeFalsy();

                done();

            })
            .catch( error => {

                expect( error ).toBe( 'No se pudo encontrar el héroe ' + id );

                done();
                /*NOTA: se debe llamar el done() antes de finalizar el callback para que JEST espere a que finalice el proceso*/
            });

            //NOTA: Para probar el error basta con mandar solo el catch

    });

});