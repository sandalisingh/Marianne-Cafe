import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useNavigate } from 'react-router-dom';

function SignUpForm(props) {

  const navigate = useNavigate();

  const [ERROR, setERROR] = React.useState(null);

  function getERROR(text) {
    setERROR(
      <div className="ERROR" style={{ color: 'red' }}>
        {text}
      </div>
    )
  }

  useEffect(() => getERROR()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

  const [valuePhone, setValuePhone] = useState()

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

  async function handleSignUp(event) {
    event.preventDefault();

    let CREDENTIALS = {
      Username: event.target[0].value,
      PhoneNo: event.target[2].value,
      Email: event.target[3].value,
      Password: event.target[4].value
    }

    console.log("\nSENDING....");
    console.log(JSON.stringify(CREDENTIALS));

    await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(CREDENTIALS)
    })
      .then(response => response.json())
      .then(data => {
        console.log("TOKEN VALUE RECEIVED FROM SERVER")
        console.log(data)

        if (data.isERROR === false && data.isSignedUpSuccessfully === true) {
          navigate('/login')
        } else {
          getERROR(data.ERROR)
        }
      })
      .catch(error => {
        //handle error
        console.log("ERROR");
        console.log(error);
      });
  }

  return (
    <div className="TextCenter FormDiv" style={{ height: '540px' }}>
      <Form onSubmit={handleSignUp} className="Form" style={{ color: "#48466D" }}>

        {ERROR}

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="">Username</Form.Label>
          <Form.Control className="" type="text" name="Username" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNo">
          <Form.Label className="">Phone Number</Form.Label>
          <PhoneInput
            defaultCountry="IN"
            value={valuePhone}
            onChange={setValuePhone}
            name="PhoneNo" required
            className=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="">Email</Form.Label>
          <Form.Control className="" type="email" name="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="">Password</Form.Label>
          <Input
            required
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

        <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>

      </Form>
    </div>
  );
}

export default SignUpForm;