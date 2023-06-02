import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { TasksProvider } from './utils/Task-context';
import { ThemeProvider } from './utils/Theme-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TasksProvider>
  </React.StrictMode>
);
