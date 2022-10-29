import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css';

import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
    
import Home from "./Pages/Home"
import Order from './Pages/Order';
import Login from './Pages/Login';

  
function App(props) {
return (
    <div className='App'>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home isAdmin={props.isAdmin}/>} />
                <Route path='/order' element={<Order isAdmin={props.isAdmin}/>} />
                <Route path='/login' element={<Login isAdmin={props.isAdmin}/>} />
            </Routes>
        </Router>
        <Footer/>
    </div>
);
}
  
export default App;