import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/styles.css'  
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { TestLocation } from './TestLocation';


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    {/* <FirstApp title='Hola, soy David' /> */}
    <CounterApp value={100} />
  </React.StrictMode>
)
