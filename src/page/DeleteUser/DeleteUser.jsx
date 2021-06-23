import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import "../UserForm/UserForm.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UserItem from "../../components/UserItem";
import { deleteUserCreator } from "../../redux/userReducer";

const DeleteUser = () => {
  const history = useHistory();
  const user = useSelector((state) => state.users.deleteUser);
  const error = useSelector((state) => state.users.errorDel);

  const dispatch = useDispatch();

  const deleteUser = (e) => {
    dispatch(deleteUserCreator());
  };

  return (
    <div className='change__contaier'>
      <div className='home__cards'>
        <ArrowBackIcon className='user__back' onClick={history.goBack} />
        {!error ? (
          user && <UserItem key={user[0].id} user={user[0]} />
        ) : (
          <p>{error}</p>
        )}
        <Button onClick={deleteUser} variant='contained' color='primary'>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default DeleteUser;
