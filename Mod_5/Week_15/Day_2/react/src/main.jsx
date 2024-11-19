import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import configureStore from './store/store.js'

import App from './App.jsx'

import './index.css'


const store = configureStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>

  </StrictMode>,
)
