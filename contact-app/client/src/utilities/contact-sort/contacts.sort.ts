import { ContactInterface } from "../interface";

export const ContactSort = (searchText:string, allContacts:ContactInterface[]) => {
  let contactsToDisplay = [];
  if (searchText !== "") {
    searchText = searchText.toLowerCase();

    for (let index = 0; index < allContacts.length; index++) {
      const contact = allContacts[index];
      if (
        contact.name.substring(0, searchText.length).toLowerCase() ===
        searchText
      ) {
        contactsToDisplay.push(contact);
      }
    }
    contactsToDisplay.sort(function (a, b):number {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      } 
      else {
        return 1;
      }
    });

  } 
  
  else {
    for (let index = 0; index < allContacts.length; index++) {
      contactsToDisplay.push(allContacts[index]);
    }
    contactsToDisplay.sort(function (a, b):number {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  return contactsToDisplay;
};
