import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <AuthProvider>
   <div className="dark:bg-slate-900 dark:text-white"> 
   <App />
   </div>
   </AuthProvider>
  </BrowserRouter>
);
