import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas de CounterApp', ()  => {

    const value = 100;

    test('Se debe hacer el match con el componente CounterApp', () => {

        const { container } = render( <CounterApp value={value} /> );

        expect( container ).toMatchSnapshot();

    });

    test('Debería de mostrar el valor inicial de 100', () => {

        render( <CounterApp value={value} /> );
        expect( screen.getByText(100) ).toBeTruthy();

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe('100')

    });

    test('Debe de incrementar con el boton de +1', () => {

        render( <CounterApp value={value} /> );
        fireEvent.click( screen.getByText('+ 1') );
        expect( screen.getByText('101') ).toBeTruthy();

    });

    test('Debe de decrementar con el boton de -1', () => {

        render( <CounterApp value={value} /> );
        fireEvent.click( screen.getByText('- 1') );
        expect( screen.getByText('99') ).toBeTruthy();


    });

    test('Debe de resetear con el boton de Reset', () => {

        render( <CounterApp value={value} /> );
        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText('100') ).toBeTruthy();

    })

});