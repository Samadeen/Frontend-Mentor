import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { HeadphonesProvider } from './api/headphones-api.tsx';
import { EarphonesProvider } from './api/earphones-api.tsx';
import { SpeakersProvider } from './api/speakers-api.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <EarphonesProvider>
        <SpeakersProvider>
          <HeadphonesProvider>
            <App />
          </HeadphonesProvider>
        </SpeakersProvider>
      </EarphonesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
