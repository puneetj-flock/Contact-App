import {
  CHECK_AUTH,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  GET,
  POST,
} from "./constants";

import { APIManager } from "../api/APIManager";
import { UserInterface } from "../utilities/interface";

export class AuthService {
  static checkAuth() {
    return APIManager.request(CHECK_AUTH, GET, null, true, true);
  }

  static registerUser(user:UserInterface) {
    return APIManager.request(
      REGISTER_USER,
      POST,
      JSON.stringify(user),
      false,
      true
    ).then((res) => {
      const resp = res;
      localStorage.setItem("sessionToken", resp.sessionToken);
      let sessionStorage = window.sessionStorage;
      sessionStorage.setItem("name", resp.name);
    });
  }

  static loginUser(user:UserInterface) {
    return APIManager.request(
      LOGIN_USER,
      POST,
      JSON.stringify(user),
      false,
      true
    ).then((res) => {
      console.log("Setting Session Token and name LOGIN API");
      const resp = res;
      localStorage.setItem("sessionToken", resp.sessionToken);
      let sessionStorage = window.sessionStorage;
      sessionStorage.setItem("name", resp.name);
    });
  }

  static logoutUser() {
    return APIManager.request(LOGOUT_USER, GET, null, true, false, false).then(
      () => {
        localStorage.removeItem("sessionToken");
        let sessionStorage = window.sessionStorage;
        sessionStorage.removeItem("name");
      }
    );
  }
}

// export instance.
