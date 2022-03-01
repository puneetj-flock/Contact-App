import { BaseContact } from "../baseContact/BaseContact";
import { setMenu } from "../../redux/menu";
import { useDispatch } from "react-redux";
import { clearSelectedContact } from "../../redux/selectedContact";
import { ContactInterface } from "../../utilities/interface";
import { contactManager } from "../../tailgate/api/contactmanager";


const AddContact = () => {
  const dispatch = useDispatch();

  const addContactHandler = (contact:ContactInterface) => {
    contactManager.addContact(contact);
    dispatch(setMenu(""));
    dispatch(clearSelectedContact());
  };
  return (
    <BaseContact
      heading_text="Add New Contact"
      button_text="Save"
      rootStyle="contact-wrapper-add"
      ContactHandler={addContactHandler}
    />
  );
};

export { AddContact };
