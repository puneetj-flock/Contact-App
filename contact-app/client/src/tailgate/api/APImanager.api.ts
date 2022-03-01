export class APIManager {
  static async request(
    url:string,
    method : string,
    body : string | null,
    isPostAuth = false,
    isJSON = false,
    haveResponse = true
  ) {
    let headers = new Headers();
    if (isPostAuth) {
      const sessionToken = localStorage.getItem("sessionToken") as string;
      headers.append("sessionToken", sessionToken);
    }
    if (isJSON) {
      headers.append("Content-Type", "application/json");
    }
    return await fetch(url, {
      method: method,
      headers: headers,
      body: body,
    }).then((data) => {
      if (data.status === 400) {
        alert("Bad Request");
      } else if (data.status === 401) {
        throw new Error("User Not valid Re-login");
      } else if (data.status === 403) {
        alert("Forbidden");
        throw new Error("User Not Registered");
      } else if (data.status === 404) {
        alert("Not Found");
      } else if (data.status === 500) {
        alert("Internal Server Error");
      }
      if (haveResponse) {
        return data.json();
      }
    });
  }
}
