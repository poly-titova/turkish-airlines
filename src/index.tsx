import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { tickets } from './data/tickets.json';

ReactDOM.render(
  <React.StrictMode>
    <App tickets={tickets} />
  </React.StrictMode>,
  document.getElementById('root')
);
