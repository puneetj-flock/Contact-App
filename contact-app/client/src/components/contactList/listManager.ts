import { ContactInterface } from "../../utilities/interface";

const listManager = (contacts : ContactInterface[], type: number, obj:ContactInterface) => {
    if(type === 1)
    {
        return [...contacts, obj];
    }
    
    if(type === 2)
    {
      contacts = contacts.filter((contact:any) => contact.id !== obj.id);
      return [...contacts, obj];
    }

    if(type === 3)
    {
       let new_contacts = [...contacts];
       let returned_arr = new_contacts.filter((contact:any) => contact.id !== obj.id);
       return returned_arr;
    }
};

export {listManager};
