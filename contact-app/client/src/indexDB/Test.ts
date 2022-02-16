
import {db} from "./db"

export interface Contact {
    id: number;
    name: string;
    contact: string;
    address: string;
    userId:number;
    score:number;
    email: string;
  }

export async function addContactIDB(contact:Contact)
  {
    try {
        const id = await db.contacts.add(contact);
        console.log("contact added with id " + id);
      } catch (error) {
        
      }
  }
function addIDB(contact_list:[Contact]) {

    contact_list.forEach(element => {
        addContactIDB(element);
    });
    
  }
export {addIDB};