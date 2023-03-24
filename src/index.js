import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BrowserRouter.Routes>
      <div className=' bg-gray-700 min-h-screen'/>
        <BrowserRouter.Route path="/" element={ <App /> }>
        </BrowserRouter.Route>
      </BrowserRouter.Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
