import { render, screen } from "@testing-library/react"
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

    })

})