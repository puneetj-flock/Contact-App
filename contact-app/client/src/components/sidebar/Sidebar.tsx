import { IconButton } from "@mui/material";
import { ContactList } from "../contactList/ContactList";
import { setMenu } from "../../redux/menu";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/searchText";
import AddIcon from "@material-ui/icons/Add";

import "./Sidebar.scss";
import { clearSelectedContact } from "../../redux/selectedContact";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="search-box">
        <div className="search-bar">
          <input
            placeholder="Search Contact"
            onChange={(e) => {
              dispatch(setSearchText(e.target.value));
            }}
          />
        </div>
        <div className="add-contact">
          <IconButton
            style={{ height: "35px", width: "35px", borderRadius: "100%" }}
            aria-label="add"
            title="Add Contact"
            onClick={() => {
              dispatch(clearSelectedContact());
              dispatch(setMenu("AddContact"));
            }}
          >
            <AddIcon style={{ height: "25px", width: "25px" }} />
          </IconButton>
        </div>
      </div>
      <ContactList />
    </div>
  );
};

export { Sidebar };
