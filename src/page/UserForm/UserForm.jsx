import React, { useEffect, useState } from "react";
import "./UserForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserCreator } from "../../redux/userReducer";
import { SET_USERS_SUCCESS } from "../../redux/types";

const UserForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [text, setText] = useState("");
  let userAdded = useSelector((state) => state.users.addUser);
  debugger;

  const addUser = (e) => {
    debugger;
    let new_user = {
      name: name,
      surname: surname,
      desc: text,
    };
    dispatch(setUserCreator({ SET_USERS_SUCCESS, payload: new_user }));
    setName("");
    setText("");
    setSurname("");
    setTimeout(() => {
      userAdded = false;
    }, 2000);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurName = (e) => {
    setSurname(e.target.value);
  };

  return (
    <div className='form__container'>
      <ArrowBackIcon className='user__back' onClick={history.goBack} />
      <form className='user__form' noValidate autoComplete='off'>
        <TextField
          onChange={(e) => handleName(e)}
          value={name}
          id='standard-basic'
          label='name'
        />
        <TextField
          onChange={(e) => handleSurName(e)}
          value={surname}
          id='standard-basic'
          label='surname'
        />
        <TextField
          onChange={(e) => handleText(e)}
          value={text}
          id='standard-basic'
          label='description'
        />
        <Button onClick={addUser} variant='contained' color='primary'>
          Primary
        </Button>
      </form>
      {userAdded && <p>user Added</p>}
    </div>
  );
};

export default UserForm;
