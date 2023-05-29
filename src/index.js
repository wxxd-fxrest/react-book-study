import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import NewApp from './14_NewsViewer/NewApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewApp />
  </React.StrictMode>
);

