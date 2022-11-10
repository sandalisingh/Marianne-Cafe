import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style.css';

import Navbar from './Components/NavBar';
import Footer from './Components/Footer';

import Home from "./Pages/Home"
import Order from './Pages/Order';
import Order2 from './Pages/Order2';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import BILL from './Pages/BILL';
import OrderStatus from './Pages/OrderStatus';
import USERS from './Pages/USERS';


function App() {

    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(JSON.parse(localStorage.getItem('TOKEN')));
    }

    useEffect(() => getToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);

    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home TOKEN={TOKEN} />} />

                    {
                        TOKEN === null ?
                            null 
                            :
                            TOKEN.isAdmin === true ?
                                <Route path='/order' element={<Order />} />
                                :
                                TOKEN.placedOrder === true?
                                <Route path='/order' element={<OrderStatus TOKEN={TOKEN} />} />
                                :
                                <Route path='/order' element={<Order2 />} />
                    }

                    {/* <Route path='/order' element={<Order TOKEN={TOKEN} />} /> */}
                    <Route path='/login' element={<Login TOKEN={TOKEN} />} />
                    <Route path='/signup' element={<SignUp TOKEN={TOKEN} />} />
                    <Route path='/users' element={<USERS />} />
                    <Route path='/bill' element={<BILL TOKEN={TOKEN} />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;