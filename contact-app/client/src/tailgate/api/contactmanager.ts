
import { idbManager } from "../indexDB/idbManager.api";
import { contactService } from "../service/contacts.service";
import { ContactInterface } from "../../utilities/interface";

class ContactManager {

    
    getContacts(){
        contactService.getContacts().then( (contactsList:ContactInterface[]) => {
            contactsList.forEach(contact => {
                idbManager.setContact(contact);
            });
        });
    }

    addContact(contact : ContactInterface){
        contactService.addContact(contact).then((res) => {
            const id = "id";
            contact = { ...contact, [id]: res };
        });
    }

    updateContact(contact:ContactInterface) {
        contactService.updateContact(contact);
    }

    deleteContact(contact:ContactInterface) {
        contactService.deleteContact(contact);
    }
}

export const contactManager = new ContactManager();