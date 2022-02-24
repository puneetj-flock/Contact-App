import { useState } from "react";

import "./RegisterPage.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthService } from "../../tailgate/service/auth.service";
import { validate } from "../../utilities/validation";


const RegisterPage = function () {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("sessionToken")) {
      AuthService.checkAuth().then((data) => {
        navigate("/", { replace: true });
      });
    }
  }, [navigate]);

  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (prop:string) => {
    return (event:any) => {
      
      setRegisterInfo({ ...registerInfo, [prop]: event.target.value });
    };
  };

  const clickHandler = () => {
    if (
      validate.Email(registerInfo.email) &&
      registerInfo.password !== "" &&
      registerInfo.name !== ""
    ) {
      AuthService.registerUser(registerInfo).then(() => {
        navigate("/");
      });
    } else {
      alert("Incorrect Details");
    }
  };
  return (
    <Box className="registerpage-wrapper">
      <Box className="registerpage-body">
        <Box className="registerpage-header">
          <Typography variant="h5">New User! Register Here</Typography>
        </Box>
        <Box className="registerpage-form">
          <Box className="registerpage-form-body">
            <TextField
              required
              margin="normal"
              id="outlined-required 1"
              label="Name"
              onChange={changeHandler("name")}
            />

            <TextField
              required
              margin="normal"
              id="outlined-required 2"
              label="Email"
              onChange={changeHandler("email")}
            />
            <TextField
              required
              margin="normal"
              id="outlined-required 3"
              label="Password"
              type="password"
              onChange={changeHandler("password")}
            />
            <Button
              id="register-botton"
              type="submit"
              variant="contained"
              onClick={clickHandler}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { RegisterPage };
