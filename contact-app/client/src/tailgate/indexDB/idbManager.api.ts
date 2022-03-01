import { ContactInterface } from "./db";
import { db } from "./db";

class IdbManager {

    initializeDB(){
        console.log("open");
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
            db.contacts.delete(contact.id);
    }
    updateContact(contact : ContactInterface){
        db.contacts.update(contact.id, contact);
    }
    getContactList(){
         return db.contacts.toArray();
    }
}

export const idbManager = new IdbManager();
