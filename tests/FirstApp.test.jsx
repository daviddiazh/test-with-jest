import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp /> ', () => {

    test('Debe hacer match con el snapshot', () => {

        const title = 'Hola, soy David'
        const { container } = render( <FirstApp title={title} /> );

        expect( container ).toMatchSnapshot()

    });

    test('El h1 debe hacer match con el snapshot', () => {

        const title = 'Hola, soy David'
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );
        expect( getByText(title) ).toBeTruthy() 
        /* Con el toBeTruthy() basicamente validamos que el elemento en efecto exista*/

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title ); // o toContain()

        expect( getByTestId('test-title').innerHTML ).toBe( title );

    });

    test('La descripción debe debe ser enviado por las props', () => {

        const title = 'Hola, soy David';
        const description = 'Soy una descripción'
        const { container, getByText, getByTestId, getAllByText } = render( <FirstApp title={title} description={description} /> );
        expect( getByText(title) ).toBeTruthy() 
        /* Con el toBeTruthy() basicamente validamos que el elemento en efecto exista*/

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title ); // o toContain()

        expect( getAllByText(description).length ).toBe( 1 );

    });

})