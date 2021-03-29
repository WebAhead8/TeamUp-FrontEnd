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

function Profile() {
  // States
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const [noti, setNoti] = React.useState(false);
  const [triggerEmail, setTriggerEmail] = React.useState(false);
  const [triggerPass, setTriggerPass] = React.useState(false);
  const [triggerUsername, setTriggerUsername] = React.useState(false);
  const [triggerDelete, setTriggerDelete] = React.useState(false);

  const [platform, setPlatform] = React.useState([
    { id: "xbox", checked: false, src: "../../Assets/xbox.svg" },
    { id: "ps", checked: false, src: "../../Assets/playstation.svg" },
    { id: "pc", checked: false, src: "../../Assets/pc.svg" },
    { id: "mobile", checked: false, src: "../../Assets/mobile.svg" },
  ]);

  React.useEffect(() => {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
          setIsLoggedIn(true);
          setPlatform(
            platform.map((platf) => {
              if (data.platform.includes(platf.id)) {
                return { ...platf, checked: true };
              } else {
                return platf;
              }
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setNoti(true);
    }
  }, []);

  // Check If there is a user logged in
  // React.useEffect(() => {
  //   const token = window.localStorage.getItem("access_token");
  //   if (token) {
  //     getUser(token)
  //       .then((data) => {
  //         setUser(data);
  //         setIsLoggedIn(true);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     setNoti(true);
  //   }
  // }, [platform]);

  // Update platforms when check or uncheck a box

  function updatePlatforms(plat) {
    setPlatform(
      platform.map((pt) => {
        if (pt.id === plat) {
          return {
            ...pt,
            checked: !pt.checked,
          };
        }
        return pt;
      })
    );

    let ptf = platform.reduce((acc, { id, checked }) => {
      if (checked) {
        acc.push(id);
      }
      return acc;
    }, []);

    const url = "platforms";
    updateUser(url, {
      id: user.id,
      platform: ptf,
    })
      .then((data) => console.log("platform ", data))
      .catch((error) => {
        console.log(error);
      });
  }

  // Logout Function
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");

    setUser({});
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div className="profile">
      <Notification noti={noti} setNoti={setNoti} link="/login">
        You Have To Login First
      </Notification>
      <div className="profile-hdr">
        <header>
          <div>
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

      <fieldset className="platforms">
        <legend>platforms</legend>
        <div className="container">
          {/* Playstation */}
          {platform.map((plat) => (
            <label>
              <img src={plat.src} />
              <input
                type="checkbox"
                name="platforms"
                value={plat.id}
                checked={plat.checked}
                onClick={(e) => updatePlatforms(e.target.value)}
              ></input>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="gamelist">
        <label>
          Add New Game : <br />
          <DataList user={user} />
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
