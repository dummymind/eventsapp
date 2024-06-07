import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Event from './components/ResponsiveEvent.jsx/Event.js';
import './components/ResponsiveEvent.jsx/Event.css'
import './components/ResponsiveEvent.jsx/CreateEvent.ts'
import reportWebVitals from './reportWebVitals';
import App from './App';
import './App.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   <App/>
   </React.StrictMode>

);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();