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

import { APIManager } from "../../api/APIManager.api";
import { ContactInterface } from "../../utilities/interface";

export class ContactService {
  static getContacts() {
    return APIManager.request(GET_CONTACTS, GET, null, true);
  }

  static addContact(contact:ContactInterface) {
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

  static updateContact(contact:ContactInterface) {
    return APIManager.request(
      UPDATE_CONTACT,
      PUT,
      JSON.stringify(contact),
      true,
      true,
      false
    );
  }

  static deleteContact(contactId:number) {
    var formData = new FormData() as any;
    formData.append("id", contactId);
    console.log(formData);
    
    return APIManager.request(
      DELETE_CONTACT,
      DELETE,
      formData,
      true,
      false,
      false
    );
  }
}
