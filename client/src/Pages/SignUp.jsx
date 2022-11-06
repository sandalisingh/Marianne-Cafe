// import React, { useState, useEffect} from "react";

import Greeting from "../Components/Greeting"
import SignUpForm from "../Components/SignUpForm"

function SignUp() {

  return (
    <div className="">
      <div className="Center">
        <Greeting Title="Sign Up"/>
      </div>
      
      <div className="Center">
        <div className=" neonBox FormBox2">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;