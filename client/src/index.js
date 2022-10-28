import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import App from './Components/App';
// import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// console.log("front/src : index.js working");

//browser router : only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App isAdmin={false}/>
  </React.StrictMode>
);

// ReactDOM.render(
//     <React.StrictMode>
//     <BrowserRouter>       
//       <App isAdmin={false}/>
//     </BrowserRouter>
//     </React.StrictMode>,
//   document.getElementById('root')
// );
