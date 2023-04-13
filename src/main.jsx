import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/index.scss'

import { Provider } from '../context/Busqueda'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
