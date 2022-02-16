import { useAppSelector } from "../../redux/hook";
import { ContactSort } from "../../utilities/contactSort";
import { db } from "../../indexDB/db";
import { useState, useEffect } from "react";
import "./ContactList.scss";
import { subscriber } from "../../indexDB/observableDb";
import { listManager } from "./listManager";
import { Contact } from "../contact/Contact";

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
    db.open();
    db.contacts.toArray().then((arr) => {
      setAllContacts(arr);
    });
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
