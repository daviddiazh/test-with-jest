import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);
    
    const handleAdd = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    const handleSubstrack = (e) => {
        e.preventDefault();
        setCounter(counter - 1);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button
                onClick={ handleAdd }
            >
                + 1
            </button>
            <button
                onClick={ handleSubstrack }
            >
                - 1
            </button>
            <button
                onClick={ handleReset }
            >
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 'El {value} no está definido'
}