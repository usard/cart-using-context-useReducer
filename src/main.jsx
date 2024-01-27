import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContextProvider from './context';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
