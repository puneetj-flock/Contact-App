import { ContactService } from "../service/contacts.service";
import { ContactInterface } from "../../utilities/interface";
import { db } from "./db";

class IdbManager {

    initializeDB(){
        db.open();
    }
   async setContact(contact : ContactInterface){
        try {
            const id = await db.contacts.add(contact);
            console.log("contact added with id " + id);
          } catch (error) {
            
          }
    }
    deleteContact(contact : ContactInterface){
        ContactService.deleteContact(contact.id).then(() => {
            db.contacts.delete(contact.id);
          });
    }
    updateContact(contact : ContactInterface){
        ContactService.updateContact(contact);
        db.contacts.update(contact.id, contact);
    }
    setContactList(){
        ContactService.getContacts().then((contactList : ContactInterface[]) => {
        contactList.forEach(element => {
            this.setContact(element);
        });
    });
    }
    getContactList(){
        return db.contacts.toArray();
    }
}

export const idbManager = new IdbManager();