import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../tailgate/service/auth.service";
import { validate } from "../../utilities/validation";
import { useDispatch } from "react-redux";
import { setAuthenticate } from "../../redux/userAuth";
import "./LoginPage.scss";

const LoginPage = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (prop:string) => {
    return (event:any) => {
      setLoginInfo({ ...loginInfo, [prop]: event.target.value });
    };
  };

  const handleSignIn = () => {
    if (validate.Email(loginInfo.email)) {
      AuthService.loginUser(loginInfo)
        .then(() => {
          console.log("Navigating to home from login\n");
          dispatch(setAuthenticate(true));
          navigate("/", { replace: true });
        })
        .catch((err) => {
          console.log(err + "Login Error catched here");
        });
    } else {
      alert("Please Enter Correct Email");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Box className="loginpage-wrapper">
      <Box className="loginpage-body">
        <Box className="loginpage-header">
          <h2>Login</h2>
        </Box>
        <Box className="loginpage-form">
          <Box className="loginpage-form-body">
            <TextField
              required
              margin="normal"
              id="outlined-required"
              label="Email"
              onChange={changeHandler("email")}
            />
            <TextField
              required
              margin="normal"
              id="outlined-required"
              label="Password"
              type="password"
              onChange={changeHandler("password")}
            />
            <Button type="submit" variant="contained" onClick={handleSignIn}>
              Sign In
            </Button>
          </Box>
        </Box>
        <Box className="loginpage-footer">
          <Typography
            className="register-heading"
            variant="h6"
            style={{ marginBottom: "30px" }}
          >
            Don't have an account?
          </Typography>
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { LoginPage };
