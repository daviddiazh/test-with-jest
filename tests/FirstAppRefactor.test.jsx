import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp /> Refactor ', () => {

    const title = 'Hola, soy David';
    const description = 'Soy una descripción';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={title} /> );
        expect( container ).toMatchSnapshot();
        /** Con el toMatchSnapshot() se verifica que el Componente coincida con la captura de __snapshots__  */

    });

    test('Debe mostrar el titulo en un h1', () => {

        render( <FirstApp title={title} /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title)

    });

    test('Debería enviar la descripción por props', () => {

        render( 
            <FirstApp
                title={title}
                description={description} 
            /> 
        );

        expect( screen.getAllByText(description).length ).toBe(1)

    })

    // test('Debe mostrar el mensaje de "Hola, soy David"', () => {

    //     render( <FirstApp title={title} /> );
    //     expect( screen.getByText(title) ).toBeTruthy();
         //screen.debug(); contiene todo el objeto del 'JSX' con el estado.

    // });


})