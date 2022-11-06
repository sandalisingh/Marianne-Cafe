import React from 'react';
import {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css';

import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
    
import Home from "./Pages/Home"
import Order from './Pages/Order';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

  
function App(props) {

    const [TOKEN, setToken] = useState([]);

    useEffect(() => {
        const receiveData = localStorage.getItem('TOKEN');
        
        console.log('TOKEN = ')
        console.log(receiveData)

        if (receiveData) {
            setToken(receiveData);
        }
    }, []);

    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home TOKEN={TOKEN} />} />
                    <Route path='/order' element={<Order TOKEN={TOKEN} />} />
                    <Route path='/login' element={<Login TOKEN={TOKEN} />} />
                    <Route path='/signup' element={<SignUp TOKEN={TOKEN} />} />
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}
  
export default App;