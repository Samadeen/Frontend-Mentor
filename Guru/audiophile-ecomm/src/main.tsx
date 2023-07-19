import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { HeadphonesProvider } from './api/headphones-api.tsx';
import { EarphonesProvider } from './api/earphones-api.tsx';
import { SpeakersProvider } from './api/speakers-api.tsx';
import { ShoppingCartProvider } from './contexts/cart-context.tsx';
import { ProductProvider } from './api/product-api.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCartProvider>
        <ProductProvider>
          <EarphonesProvider>
            <SpeakersProvider>
              <HeadphonesProvider>
                <App />
              </HeadphonesProvider>
            </SpeakersProvider>
          </EarphonesProvider>
        </ProductProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
