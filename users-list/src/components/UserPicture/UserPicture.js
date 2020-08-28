import React, { useState } from "react";
import classes from "./UserPicture.module.css";
import anonymousUserPicture from "../../assets/anonymousUser.jpg";
import UserOptions from './UserOptions/UserOptions';

const Chevron = (props) => (
  <svg
    onClick={props.onClick}
    height="12"
    width="12"
    viewBox="0 0 24 24"
    role="img"
  >
    <path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
  </svg>
);
const UserPicture = (props) => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  return (
    <div className={classes.UserPictureContainer}>
      <img src={anonymousUserPicture} alt="anonymous user" />
      <Chevron
        onClick={() => setShowUserOptions((oldShowtate) => !oldShowtate)}
      />

      {showUserOptions ? <UserOptions/> : null}
    </div>
  );
};

export default UserPicture;
