import React from "react";

import Greeting from "../Components/Greeting"
import LoginForm from "../Components/LoginForm"

function Login() {

  return (
    <div className="">
      <div className="Center">
        <Greeting Title="Login"/>
      </div>
      
      <div className="Center">
        <div className=" neonBox FormBox">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;