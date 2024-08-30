import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Daily from './Daily';
import './css/Daily.css';
import { Provider } from 'react-redux';
import Store from './store/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Daily />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);