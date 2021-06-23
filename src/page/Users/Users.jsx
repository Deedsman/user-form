import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCreator } from "../../redux/userReducer";
import UserItem from "../../components/UserItem";
import { setCurrentNumber } from "../../redux/userReducer";
import "./Users.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Pagination from "../../components/Pagination";
import { useHistory } from "react-router-dom";

const Users = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const pages = useSelector((state) => state.users);

  const indexOfLastPost = pages.currentPage * pages.pageSize;
  const indexOfFirstPost = indexOfLastPost - pages.pageSize;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const currentNumber = (num) => {
    dispatch(setCurrentNumber(num));
  };

  useEffect(() => {
    dispatch(getUserCreator());
  }, []);
  return (
    <div className='home__cards'>
      <ArrowBackIcon className='user__back' onClick={history.goBack} />
      <div>
        {users.loading && <p>...loading</p>}
        {users.length > 0 &&
          currentUsers.map((user) => <UserItem key={user.id} user={user} />)}
        {users.length === 0 && !loading && <p>No users</p>}
        {error && !loading && <p>{error}</p>}
        <Pagination pages={pages} currentNumber={currentNumber} />
      </div>
    </div>
  );
};

export default Users;
