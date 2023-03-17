import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { ThemeProvider } from './utils/theme-context';
import { FontProvider } from './utils/font-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </React.StrictMode>
);
