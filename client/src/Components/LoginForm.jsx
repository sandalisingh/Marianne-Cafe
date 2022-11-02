import { Form, Button } from "react-bootstrap";
import React, {useState,useEffect} from 'react';

function LoginForm (props) {

     //----------------------------------- L O G  I N -----------------------------------------
//   const [errorMessages, setErrorMessages] = useState(props.ErrorMessage);

//   const database = [
//     {
//       username: "user1",
//       email: "user1@gmail.com",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       email : "user2@gmail.com",
//       password: "pass2"
//     },
//     {
//       username: "dietitianRashu",
//       email: "dt.rashumalhotra@gmail.com",
//       password: "Password"
//     }
//   ];

//   const errors = {
//     uname: "Invalid Username",
//     email: "Invalid Email",
//     pass: "Invalid Password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, email, pass } = document.forms[0];  //inputs from form

//     // Find username in db
//     const userData = database.find((user) => user.username === uname.value);
//     // console.log(uname.value);
//     // console.log(pass.value);

//     // Compare password
//     if (userData) {
//       if (userData.email !== email.value) {
//         // Invalid password
//         console.log(email.value);
//         setErrorMessages({ name: "email", message: errors.email });
//         console.log(errorMessages.message);
//       } else if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         //valid password and username
//         setIsSubmitted(true);
//         if(uname.value === "dietitianRashu") {
//           setIsDietitian(true);
//         }
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//       // console.log(errorMessages.message);
//     }
//   };

  // Error message
  
//   const [ isError, setError] = useState(props.isError);
    
//   const getError = () => {
      
//   }

  //Runs on the first render
  //And any time any dependency value changes
  const [ Errors, setErrors] = useState([]);
    
    const getData = () => {
        let url = 'http://localhost:3001'; //URL of the resource we want to fetch
        fetch(url).then((response) => response.json()).then((receivedData) => 
            (receivedData.isError ? setErrors(receivedData.ErrorMessage) : setErrors(null)));}

    
    //Runs on the first render
    //And any time any dependency value changes
    useEffect( () => getData(), [] );
  
  const renderErrorMessage = () => {
    // if (Errors.isError ) {
      // console.log("i work fxn           - " + errorMessages.message)
      return (
        <div className="Error SmFont CursiveFont"><small>{Errors}</small></div>
       );
    // }
  }

    return (
      <div className="TextCenter FormDiv">
        <Form action="/loginUser" method="post" className="Form" style={{color:"#48466D"}}>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="InputLabel">Username</Form.Label>
          <Form.Control className="InputFocusGreen" type="text" name="Username" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="InputLabel">Email</Form.Label>
          <Form.Control className="InputFocusGreen" type="email" name="Email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="InputLabel">Password</Form.Label>
          <Form.Control className="InputFocusGreen" type="password" name="Password" required />
          
        </Form.Group>
        
        {renderErrorMessage("uname")}
        {renderErrorMessage("email")}
        {renderErrorMessage("pass")}

        <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>

      </Form>
      </div>
    );
}

export default LoginForm;