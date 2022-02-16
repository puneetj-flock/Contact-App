import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { setSelectedContact } from "../../redux/selectedContact";

import "./BaseContact.scss";
import { grey } from "@mui/material/colors";


const BaseContact = (props:any) => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector((state) => state.selectedContact.selectedContact);

  const changeHandler = (prop:string) => {
    return (event:any) => {
      dispatch(setSelectedContact({ ...contact, [prop]: event.target.value }));
    };
  };

  const ContactHandler = () => {
    props.ContactHandler(contact);
  };

  return (
    <Box className={props.rootStyle} border={1} borderColor={grey[400]}>
      <Typography variant="h4" color="#575757">
        {props.heading_text}
      </Typography>

      <Box className="contactinfo">
        <TextField
          fullWidth
          margin="normal"
          // readOnly = {true}
          id="outlined-required"
          label="Name"
          value={contact.name}
          onChange={changeHandler("name")}
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-required"
          label="Contact Number"
          value={contact.contact}
          onChange={changeHandler("contact")}
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-required"
          label="Email Id"
          value={contact.email}
          onChange={changeHandler("email")}
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-multiline-flexible"
          label="Address"
          value={contact.address}
          multiline
          minRows={2}
          maxRows={2}
          onChange={changeHandler("address")}
        />
      </Box>
      <Box className="contact-add">
        <Button
          id="base-contact-button"
          type="submit"
          onClick={ContactHandler}
          variant="contained"
        >
          {props.button_text}
        </Button>
      </Box>
    </Box>
  );
};

export { BaseContact };
