import { BaseContact } from "../baseContact/BaseContact";
import { setMenu } from "../../redux/menu";
import { useDispatch } from "react-redux";
import { clearSelectedContact } from "../../redux/selectedContact";
import { ContactService } from "../../tailgate/service/contacts.service";
import { ContactInterface } from "../../utilities/interface";
import { idbManager } from "../../tailgate/indexDB/idbManager.api";

const AddContact = () => {
  const dispatch = useDispatch();

  const addContactHandler = (contact:ContactInterface) => {
    ContactService.addContact(contact).then((res) => {
      const id = "id";
      contact = { ...contact, [id]: res };
      // idbManager.setContact(contact);
      dispatch(setMenu(""));
      dispatch(clearSelectedContact());
    });
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
