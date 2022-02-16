import "./App.scss";
import { useEffect } from "react";
import { LoginPage } from "./components/loginPage/LoginPage";
import { MainContent } from "./components/mainContent/MainContent";
import { RegisterPage } from "./components/registerPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRouteHome } from "./utilities/protectedRouteHome";
import { ProtectedRouteAuth } from "./utilities/protectedRouteAuth";

import { AuthService } from "./service/AuthService";
import { useAppSelector, useAppDispatch } from "./redux/hook";
import { setAuthenticate } from "./redux/userAuth";
import { CircularProgress } from "@mui/material";

function App() {
  const authenticate = useAppSelector((state) => state.userAuth.authenticate);
  const dispatch = useAppDispatch();
  useEffect(() => {
    AuthService.checkAuth()
      .then(() => {
        console.log("User authenticated");
        dispatch(setAuthenticate(true));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setAuthenticate(false));
      });
  }, [dispatch]);

  if (authenticate === null) {
    console.log("loader spining " + authenticate);
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRouteHome />}>
            <Route path="/" element={<MainContent />} />
          </Route>
          <Route element={<ProtectedRouteAuth />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
