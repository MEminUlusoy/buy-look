import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingContextProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  </React.StrictMode>
);

