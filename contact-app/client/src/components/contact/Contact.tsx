import { Avatar, IconButton } from "@mui/material";

import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { setMenu } from "../../redux/menu";
import { useDispatch } from "react-redux";

import {
  setSelectedContact,
  clearSelectedContact,
} from "../../redux/selectedContact";
import { ContactInterface } from "../../utilities/interface";
import "./Contact.scss";
import { idbManager } from "../../tailgate/indexDB/idbManager.api";

const Contact = (props:{contact:ContactInterface}) => {
  
  const dispatch = useDispatch();

  const showContact = () => {
    const score = "score";
    let updatedScoreContact = {
      ...props.contact,
      [score]: props.contact.score + 1,
    };
    dispatch(setSelectedContact(updatedScoreContact));
    idbManager.updateContact(updatedScoreContact);
    dispatch(setMenu("ShowContact"));
  };

  const deleteContact = () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (confirmDelete) {
      idbManager.deleteContact(props.contact);
      dispatch(setMenu(""));
      dispatch(clearSelectedContact());
    }
  };

  return (
    <div className="contact-box">
      <div className="contact-avatar" onClick={showContact}>
        <Avatar {...stringAvatar(props.contact.name)} />
      </div>
      <div className="contact-text" onClick={showContact}>
        <div className="contact-name">{props.contact.name}</div>
      </div>
      <div className="contact-edit">
        <IconButton
          title="Edit Contact"
          style={{ height: "40px", width: "40px", borderRadius: "100%" }}
          onClick={() => {
            dispatch(setSelectedContact(props.contact));
            dispatch(setMenu("EditContact"));
          }}
        >
          <ModeEditRoundedIcon />
        </IconButton>
      </div>
      <div className="contact-delete">
        <IconButton
          title="Delete Contact"
          onClick={deleteContact}
          style={{ height: "40px", width: "40px", borderRadius: "100%" }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export { Contact };

function stringToColor(string:string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name:string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`, // TODO: This will only print one letter. What is empty name?
  };
}
