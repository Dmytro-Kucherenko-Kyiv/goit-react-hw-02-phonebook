import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
/* import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#041934',
    textAccent: '#fef9d2',
    buttonColor: '#c3f5bf',
    good: '#006429',
    neutral: '#f0c523',
    bad: '#f02f22',
    total: '#041934',
    positive: '#006429'
  }
} */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
