import React from "react";
import { getUser, updateUser } from "../../utils/fetchUsers";
import DataList from "../DataList";
import UsersPost from "./UsersPost";
import DeleteAccount from "./Popups/DeleteAccount";
import Edit from "./Popups/Edit";
import EditEmail from "./Popups/EditEmail";
import EditPassword from "./Popups/EditPassword";
import EditUsername from "./Popups/EditUsername";
import Notification from "../Notification";
import Plateform from "../Platform";
import Error404 from "../../pages/Error404";
import EditAvatarImg from "./Popups/EditAvatarImg";

function Profile() {
  const [user, setUser] = React.useState({});
  // States
  React.useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    getUser(token)
      .then((data) => {
        setUser(data);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [newUser, setNewUser] = React.useState({
    id: user.id,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    pass: "",
    platform: "",
    gamelist: "",
    avataricon: "",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const [noti, setNoti] = React.useState(false);
  const [triggerEmail, setTriggerEmail] = React.useState(false);
  const [triggerPass, setTriggerPass] = React.useState(false);
  const [triggerUsername, setTriggerUsername] = React.useState(false);
  const [triggerDelete, setTriggerDelete] = React.useState(false);
  const [triggerAvatar, setTriggerAvatar] = React.useState(false);

  React.useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setNoti(true);
    }
  }, [newUser]);

  // Logout Function
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");

    setUser({});
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  function onChangeAvatar(avatarSrc) {
    setNewUser({ avataricon: avatarSrc });
    window.location.href = "/profile";
  }

  return (
    <div className="profile">
      <Notification noti={noti} setNoti={setNoti} link="/login">
        You Have To Login First
      </Notification>
      <div className="profile-hdr">
        <header>
          <div className="avatar">
            <img src={user.avataricon} />
          </div>
          <h1>Welcome, {user.username}</h1>

          <button
            onClick={() => {
              setTrigger(!trigger);
              setTriggerUsername(false);
              setTriggerEmail(false);
              setTriggerPass(false);
              setTriggerDelete(false);
              setTriggerAvatar(false);
            }}
          >
            <img src="../../Assets/EditBtn.svg" alt="" />
          </button>
        </header>
      </div>
      <Edit trigger={trigger} setTrigger={setTrigger}>
        <h1>Edit Your Info</h1>
        <a
          onClick={() => {
            setTriggerEmail(true);
            setTrigger(false);
          }}
        >
          Edit Your Email
        </a>
        <a
          onClick={() => {
            setTriggerPass(true);
            setTrigger(false);
          }}
        >
          Edit Your Password
        </a>
        <a
          onClick={() => {
            setTriggerUsername(true);
            setTrigger(false);
          }}
        >
          Edit Your Username
        </a>
        <a
          onClick={() => {
            setTriggerAvatar(true);
            setTrigger(false);
          }}
        >
          Edit Your Avatar Img
        </a>
        <a
          className="del-account"
          onClick={() => {
            setTriggerDelete(true);
            setTrigger(false);
          }}
        >
          Delete Your Account
        </a>
      </Edit>
      <EditEmail
        triggerEmail={triggerEmail}
        setTriggerEmail={setTriggerEmail}
        setTrigger={setTrigger}
        user={user}
      />
      <EditPassword
        triggerPass={triggerPass}
        setTriggerPass={setTriggerPass}
        setTrigger={setTrigger}
        user={user}
      />
      <EditUsername
        triggerUsername={triggerUsername}
        setTriggerUsername={setTriggerUsername}
        setTrigger={setTrigger}
        userId={user.id}
        user={user}
      />
      <EditAvatarImg
        triggerAvatar={triggerAvatar}
        setTriggerAvatar={setTriggerAvatar}
        setTrigger={setTrigger}
        userId={user.id}
        setNewAvatar={setNewUser.avataricon}
        onChange={onChangeAvatar}
      />
      <DeleteAccount
        triggerDelete={triggerDelete}
        setTriggerDelete={setTriggerDelete}
        setTrigger={setTrigger}
        id={user.id}
      />
      <fieldset className="user-info">
        <legend>User Info</legend>
        <i>First Name: {user.firstname}</i>
        <i>Last Name: {user.lastname}</i>
        <i>Username: {user.username}</i>
        <i>E-Mail: {user.email}</i>
      </fieldset>

      {/*platfoooorms */}
      <fieldset className="platforms">
        <label>
          Add New Platforms: <br />
          <Plateform user={user} setUser={setUser} />
        </label>
        <legend> Platforms</legend>
        {user.platform ? (
          <ul>
            {user.platform.map((plat) => (
              <li className="gameName" key={plat}>
                <img src={`../../Assets/${plat}.svg`} />
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </fieldset>

      {/* gameeeesList*/}
      <fieldset className="gamelist">
        <label>
          Add New Game : <br />
          <DataList user={user} setUser={setUser} />
        </label>

        {/* <input type="button" value="Add" className="add-game" /> */}
        <legend> Games List</legend>
        {user.gamelist ? (
          <ul>
            {user.gamelist.map((game) => (
              <li className="gameName" key={game.id}>
                {game}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </fieldset>
      <fieldset className="posts">
        <legend>My Posts :</legend>

        <UsersPost user={user} />
      </fieldset>
      <button onClick={logout} className="logout">
        logout
      </button>
    </div>
  );
}

export default Profile;
