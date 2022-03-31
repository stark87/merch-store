import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductContextProvider from './context';

ReactDOM.render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>,
  document.getElementById('root')
);
