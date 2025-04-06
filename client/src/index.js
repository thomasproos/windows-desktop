// Import CSS
import './index.css';

// Import Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Components
import Computer from './Computer/Computer.js';

// Render in React Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Computer />
  </React.StrictMode>
);

