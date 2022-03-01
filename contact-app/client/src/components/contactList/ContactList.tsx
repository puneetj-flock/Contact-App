import { useAppSelector } from "../../redux/hook";
import { ContactSort } from "../../utilities/contact-sort/contacts.sort";
import { useState, useEffect } from "react";
import { subscriber } from "../../tailgate/indexDB/observableDb";
import { listManager } from "./listManager";
import { Contact } from "../contact/Contact";
import { db } from "../../tailgate/indexDB/db";
import "./ContactList.scss";
import { idbManager } from "../../tailgate/indexDB/idbManager.api";

const ContactList = () => {
  const [allContacts, setAllContacts] = useState<any>([]);

  useEffect(() => {
    const subs = subscriber.subscribe({
      next: (res:any) => {
        setAllContacts(listManager(allContacts, res.change, res.contact));
      },
    });
    return () => {
      subs.unsubscribe();
    };
  }, [allContacts]);

  useEffect(() => {
    idbManager.getContactList().then( arr =>{
      setAllContacts(arr);
    })
  }, []);

  let searchText = useAppSelector((state) => state.searchText.searchText);
  let contactsToDisplay = ContactSort(searchText, allContacts);

  return (
    <div className="contact-list">
      {contactsToDisplay.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
};

export { ContactList };
