import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/About';
import '../src/asset/css/form.css'
import '../src/asset/css/main.css'
import '../src/asset/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
