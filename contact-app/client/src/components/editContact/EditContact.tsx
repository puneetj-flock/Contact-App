import { BaseContact } from "../baseContact/BaseContact";
import { setMenu } from "../../redux/menu";
import { useDispatch } from "react-redux";
import { ContactInterface } from "../../utilities/interface";
import { contactManager } from "../../tailgate/api/contactmanager";

const EditContact = () => {
  const dispatch = useDispatch();

  const editContactHandler = (contact:ContactInterface) => {
    contactManager.updateContact(contact);
    dispatch(setMenu("ShowContact"));
  };
  return (
    <BaseContact
      heading_text="Edit Contact"
      button_text="Update"
      rootStyle="contact-wrapper-edit"
      ContactHandler={editContactHandler}
    />
  );
};

export { EditContact };
