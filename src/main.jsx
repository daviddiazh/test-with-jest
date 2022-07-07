import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/styles.css'  
import { CounterApp } from './CounterApp';
import { TestLocation } from './TestLocation';


ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
)
