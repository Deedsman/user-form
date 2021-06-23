import React from "react";
import "./Home.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home__container'>
      <Link to='/users' className='home__button'>
        Get users
      </Link>
      <Link to='/form' className='home__button'>
        User Form
      </Link>
      <Link to='/change' className='home__button'>
        Change User
      </Link>
      <Link to='/delete' className='home__button'>
        Delete User
      </Link>
    </div>
  );
};
export default Home;
