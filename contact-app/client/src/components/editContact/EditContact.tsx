import { BaseContact } from "../baseContact/BaseContact";
import { setMenu } from "../../redux/menu";
import { useDispatch } from "react-redux";
import { ContactService } from "../../tailgate/service/contacts.service";
import { db } from "../../tailgate/indexDB/db";
import { ContactInterface } from "../../utilities/interface";

const EditContact = () => {
  const dispatch = useDispatch();

  const editContactHandler = (contact:ContactInterface) => {
    ContactService.updateContact(contact);
    db.contacts.update(contact.id, contact);
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
