import { idbManager } from "../src/tailgate/indexDB/idbManager.api.ts";

// eslint-disable-next-line no-undef
// importScripts("idbManager.api.ts");

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  //   console.log("event intercepted");
  // eslint-disable-next-line no-undef
  console.log(event);

  if (event.request.url === "http://localhost:8080/contact/get") {
    console.log("Get Contact Intercepted");
  }

  if (event.request.url === "http://localhost:8080/contact/add") {
    console.log("Add Contact Intercepted");
    let contact = event.request.json();
    console.log("the resolved contact", contact);
  }

  if (event.request.url === "http://localhost:8080/contact/delete") {
    console.log("Delete Contact Intercepted");
    let contact = event.request.json();
    console.log(contact);
  }

  if (event.request.url === "http://localhost:8080/contact/update") {
    console.log("Update Contact Intercepted");
    let contact = event.request.json();
    // idbManager.updateContact(contact);
  }
});
