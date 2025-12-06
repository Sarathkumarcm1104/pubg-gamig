import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.css';
import App from './App.jsx';
// Import the original site CSS so React app matches the static HTML styling
// Import AFTER App so pubg.css overrides component-level styles when needed
import '../pubg.css';
import '../log.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
