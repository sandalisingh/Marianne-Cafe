import { Form, Button } from "react-bootstrap";
import React, {useState} from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

function SignUpForm (props) {
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



    return (
      <div className="TextCenter FormDiv">
        <Form action="/signup" method="post" className="Form" style={{color:"#48466D"}}>

            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="">Username</Form.Label>
            <Form.Control className="" type="text" name="Username" required />
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNo">
            <Form.Label className="">Phone Number</Form.Label>
            {/* <Form.Control className="" type="phone" name="Username" required /> */}
            <PhoneInput
                value={valuePhone}
                onChange={setValuePhone}
                name="PhoneNo" required 
                className=""
            />

            {/* {
              isPossiblePhoneNumber({value}) === true? 
              <h5 style={{color:'red'}}>Invlaid Phone No.</h5>
              : null
            } */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="">Email</Form.Label>
            <Form.Control className="" type="email" name="Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="">Password</Form.Label>
            {/* <Form.Control className="" type="password" name="Password" required /> */}
            
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
        
            {/* {renderErrorMessage("uname")}
            {renderErrorMessage("email")}
            {renderErrorMessage("pass")} */}

            

            <Button className="ButtonStyle" variant="primary" type="submit">Submit</Button>
            
      </Form>
      </div>
    );
}

export default SignUpForm;