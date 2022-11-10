import Casserole from "../Components/Casserole";
import Greeting from "../Components/Greeting";

import React,{useEffect,useState} from 'react';

function App(props) {

  const [TOKEN, setToken] = useState({
    isAdmin: false,
    isLoggedIn: false,
    User: null
  });

  function getToken() {
    let x = JSON.parse(localStorage.getItem('TOKEN'));
    if(x) {
      setToken(x);
    }
    console.log('CARROUSEL RECEIVES TOKEN');
    console.log(TOKEN)
  }

  useEffect(() => getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

  return (
    <div className="">
      <div className="">
        <Greeting Title="Menu" />
        <Casserole Title="Beverages" TOKEN={TOKEN} InputsList={['Name', 'Price', 'Image']} />
        <Casserole Title="QuickBites" TOKEN={TOKEN} InputsList={['Name', 'Price', 'Image']} />
        <Casserole Title="Meals" TOKEN={TOKEN} InputsList={['Name', 'Price', 'Image']} />
        <Casserole Title="Milkshakes" TOKEN={TOKEN} InputsList={['Name', 'Price', 'Image']} />
        <Casserole Title="Desserts" TOKEN={TOKEN} InputsList={['Name', 'Price', 'Image']} />
        {/* {props.isAdmin===true?<Form InputsList={['Heading']} SubmitBtn="+"/>:null} */}
      </div>
    </div>
  );

}

export default App;