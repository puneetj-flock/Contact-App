import { useAppSelector } from "../../redux/hook";
import { AddContact } from "../addContact/AddContact";
import { EditContact } from "../editContact/EditContact";
import { ShowContact } from "../showContact/ShowContact";

export const Menu = () => {
  const value = useAppSelector((state) => state.menu.value);
  if (value === "AddContact") return <AddContact />;
  if (value === "ShowContact") return <ShowContact />;
  if (value === "EditContact") return <EditContact />;
  return <></>;
};
