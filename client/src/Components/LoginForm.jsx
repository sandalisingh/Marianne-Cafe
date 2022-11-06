import { Form, Button } from "react-bootstrap";
import React from 'react';
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

function LoginForm (props) {

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleLogin(event) {
    event.preventDefault();

    // alert('USERNAME = '+event.target[0].value+'\nPASSWORD = '+event.target[1].value);

    // console.log("\nHANDLE LOGIN = ");
    // console.log(event);

    let CREDENTIALS = {
      Username: event.target[0].value, 
      Password: event.target[1].value
    }

    // alert(JSON.stringify(event))

    console.log("\nSENDING....");
    console.log(JSON.stringify(CREDENTIALS));

    await fetch('http://localhost:3001/login', {  
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(CREDENTIALS)
    })
    .then(response => response.json())
    .then(data => {
      console.log("TOKEN VALUE RECEIVED FROM SERVER")
      console.log(data)

      if(data.isLoggedIn === true) {
        localStorage.setItem('TOKEN',JSON.stringify(data))
      }
    })
    .catch(error => {
      //handle error
      console.log("ERROR");
      console.log(error);
    });

    // event.preventDefault();
  }

  return (
    <div className="TextCenter FormDiv">
      <Form 
        // action="/login" 
        // method="post" 
        onSubmit={handleLogin}
        className="Form" style={{color:"#48466D"}}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="">Username</Form.Label>
          <Form.Control className="" type="text" name="Username" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          {/* <Form.Control 
            type="password" 
            name="Password" 
            required 
          /> */}
          <br/>
          <Input
            name="Password"
            className="form-control"
            type={values.showPassword ? "text" : "password"}
            onChange={handlePasswordChange("password")}
            value={values.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          
        </Form.Group>

        <Button 
          // onSubmit={handleLogin}
          // onClick={handleLogin}
          className="ButtonStyle" variant="primary" 
          type="submit"
        >
          Submit
        </Button>
        <br/>
        <a href="/SignUp">Sign Up ...</a>
      </Form>
    </div>
  );
}

export default LoginForm;