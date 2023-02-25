import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Providers/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
  </BrowserRouter>
);
