import "./App.scss";
import { useEffect } from "react";
import { LoginPage } from "./components/loginPage/LoginPage";
import { MainContent } from "./components/mainContent/MainContent";
import { RegisterPage } from "./components/registerPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRouteHome } from "./utilities/protected-routes/route.home";
import { ProtectedRouteAuth } from "./utilities/protected-routes/route.auth";

import { AuthService } from "./tailgate/service/auth.service";
import { useAppSelector, useAppDispatch } from "./redux/hook";
import { setAuthenticate } from "./redux/userAuth";
import { CircularProgress } from "@mui/material";
import { idbManager } from "./tailgate/indexDB/idbManager.api";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

function App() {
  idbManager.initializeDB();
  serviceWorkerRegistration.register();
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
