import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import NewApp from './14_NewsViewer/NewApp';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <NewApp />
  </BrowserRouter>,
  document.getElementById('root')
);

