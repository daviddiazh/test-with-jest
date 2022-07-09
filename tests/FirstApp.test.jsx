import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FirstApp /> ', () => {

    test('Debe hacer match con el snapshot', () => {

        const title = 'Hola, soy David'
        render( <FirstApp title={title} /> );

    })

})