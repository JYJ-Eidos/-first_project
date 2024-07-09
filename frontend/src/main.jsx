import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/common.css';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
