import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './Components/App';
import { BrowserRouter } from "react-router-dom";

// console.log("front/src : index.js working");

//browser router : only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>       
      <App />
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);
