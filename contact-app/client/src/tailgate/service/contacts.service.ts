import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
  GET,
  POST,
  PUT,
  DELETE,
} from "../../utilities/constants";

import { APIManager } from "../api/APImanager.api";
import { ContactInterface } from "../../utilities/interface";

 class ContactService {
   getContacts() {
    return APIManager.request(GET_CONTACTS, GET, null, true);
  }

   addContact(contact:ContactInterface) {
    return APIManager.request(
      ADD_CONTACT,
      POST,
      JSON.stringify(contact),
      true,
      true
    ).then((res) => {
      const resp = res;
      return resp.id;
    });
  }

   updateContact(contact:ContactInterface) {
    return APIManager.request(
      UPDATE_CONTACT,
      PUT,
      JSON.stringify(contact),
      true,
      true,
      false
    );
  }

   deleteContact(contact:ContactInterface) {

    return APIManager.request(
      DELETE_CONTACT,
      DELETE,
      JSON.stringify(contact),
      true,
      true,
      false
    );
  }
}

export const contactService = new ContactService();
