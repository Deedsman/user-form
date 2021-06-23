import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const UserItem = ({ user }) => {
  return (
    <div className='user__item'>
      <CardContent>
        <Typography className='' gutterBottom variant='h5' component='h5'>
          {user.name}
        </Typography>
        <Typography className='' gutterBottom variant='h5' component='h5'>
          <span>surname</span> :{user.surname}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          <span>description</span> :{user.desc}
        </Typography>
      </CardContent>
    </div>
  );
};

export default UserItem;
