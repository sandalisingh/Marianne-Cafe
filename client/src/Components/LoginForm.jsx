import { Form, Button } from "react-bootstrap";
import React, { useEffect } from 'react';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
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

    let CREDENTIALS = {
      Username: event.target[0].value,
      Password: event.target[1].value
    }

    console.log("\nSENDING....");
    console.log(JSON.stringify(CREDENTIALS));

    await fetch('http://localhost:3001/login', {
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

        if (data.isLoggedIn === true) {
          localStorage.setItem('TOKEN', JSON.stringify(data));

          navigate('/')
          window.location.reload();
        } else {
          getERROR('INVALID CREDENTIALS')
        }
      })
      .catch(error => {
        //handle error
        console.log("ERROR");
        console.log(error);
      });
  }

  return (
    <div className="TextCenter FormDiv">
      <Form
        onSubmit={handleLogin}
        className="" style={{ color: "#48466D" }}
      >
        {ERROR}

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="">Username</Form.Label>
          <Form.Control className="" type="text" name="Username" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <br />
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
          className="ButtonStyle" variant="primary"
          type="submit" style={{width:'100px'}}
        >
          Submit
        </Button>
        <br />
        <a href="/SignUp">Sign Up ...</a>
      </Form>
    </div>
  );
}

export default LoginForm;