import { getHeroeById, getHeroesByOwner } from "../src/bases-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById debe retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });
    
    test('getHeroesById debe retornar un undefined si el ID no existe', () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect( heroe ).toBeFalsy()
        
    });

    test('getHeroesByOwner debe retornar heroes de DC', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toEqual( 3 );
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {

        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toEqual( 2 );
        expect( heroes ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

    });

});
