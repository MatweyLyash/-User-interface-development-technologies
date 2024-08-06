import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

import Search from './Search';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
);


reportWebVitals();
