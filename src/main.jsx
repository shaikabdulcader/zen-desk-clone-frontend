import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>,
)
