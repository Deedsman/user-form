import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import "../UserForm/UserForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UserItem from "../../components/UserItem";
import { PUT_USERS_SUCCESS } from "../../redux/types";
import { puttUserCreator } from "../../redux/userReducer";

const ChangeUser = () => {
  const history = useHistory();
  const user = useSelector((state) => state.users.putUser);
  const error = useSelector((state) => state.users.putError);
  debugger;
  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [text, setText] = useState("");

  const addUser = (e) => {
    debugger;
    let new_user = {
      name: name,
      surname: surname,
      desc: text,
    };
    dispatch(puttUserCreator({ PUT_USERS_SUCCESS, payload: new_user }));
    setName("");
    setText("");
    setSurname("");
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
    <div className='change__contaier'>
      <div className='home__cards'>
        <ArrowBackIcon className='user__back' onClick={history.goBack} />
        {!error ? <UserItem key={user[0].id} user={user[0]} /> : <p>{error}</p>}
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
      </div>
    </div>
  );
};

export default ChangeUser;
