import React from "react";
import { getUser, updateUser } from "../../utils/fetchUsers";
import DataList from "../DataList";
import DeleteAccount from "./Popups/DeleteAccount";
import Edit from "./Popups/Edit";
import EditEmail from "./Popups/EditEmail";
import EditPassword from "./Popups/EditPassword";
import EditUsername from "./Popups/EditUsername";

function Profile() {
  const [user, setUser] = React.useState({});
  const [games, setGames] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const [triggerEmail, setTriggerEmail] = React.useState(false);
  const [triggerPass, setTriggerPass] = React.useState(false);
  const [triggerUsername, setTriggerUsername] = React.useState(false);
  const [triggerDelete, setTriggerDelete] = React.useState(false);
  const [isXboxChecked, setIsXboxChecked] = React.useState({
    xbox: false,
    ps: false,
    mobile: false,
    pc: false,
  });

  // Check If there is a user logged in
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
      window.location.href = "/login";
    }
  }, [user]);

  // Update platforms when check or uncheck a box
  function updatePlatforms(plat) {
    if (user.platform) {
      if (!user.platform.includes(plat)) {
        user.platform.push(plat);
      } else {
        user.platform.pop(plat);
      }
    }
    const url = "platforms";

    updateUser(url, { id: user.id, platform: user.platform })
      .then((data) => console.log("platform ", data))
      .catch((error) => {
        console.log(error);
      });
  }

  // function updateGamelist(game) {
  //   if (user.gamelist) {
  //     if (!user.gamelist.includes(game)) {
  //       user.gamelist.push(game);
  //     } else {
  //       user.gamelist.pop(game);
  //     }
  //   }
  //   const url = "gameslist";

  //   updateUser(url, { id: user.id, gamelist: user.gamelist })
  //     .then((data) => console.log("games ", data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // React.useEffect(() => {
  //   const platforms = ["xbox", "ps", "pc", "mobile"];
  //   if (user.platform) {
  //     for (let i = 0; i <= platforms.length; i++) {
  //       console.log("gtsgtgrsg ", platforms[i])
  //       if (user.platform.includes(platforms[i])) {
  //         const current = platforms[i];
  //         setIsXboxChecked({ current: true });
  //       }
  //     }
  //   }
  //   console.log(isXboxChecked, "gggggggg");
  // }, [user.platform]);

  // Logout Function
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");

    setUser({});
    setIsLoggedIn(false);
    window.location.href = "/landingpage";
  };

  return (
    <div className="profile">
      <div className="profile-hdr">
        <header>
          <div>
            <img src={user.avatarIcon} />
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
        userId={user.id}
      />
      <EditPassword
        triggerPass={triggerPass}
        setTriggerPass={setTriggerPass}
        setTrigger={setTrigger}
        userId={user.id}
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
        {user.platform}
        <div className="container">
          <label>
            <img src="../../Assets/playstation.svg" alt="" />
            <input
              type="checkbox"
              name="platforms"
              value="ps"
              checked={isXboxChecked.pc}
              onChange={(e) => updatePlatforms(e.target.value)}
            />
          </label>
          <label>
            <img src="../../Assets/xbox.svg" alt="" />
            <input
              type="checkbox"
              name="platforms"
              value="xbox"
              checked={isXboxChecked.xbox}
              onChange={(e) => updatePlatforms(e.target.value)}
            />
          </label>
          <label>
            <img src="../../Assets/pc.svg" alt="" />
            <input
              type="checkbox"
              name="platforms"
              value="pc"
              checked={isXboxChecked.pc}
              onChange={(e) => updatePlatforms(e.target.value)}
            />
          </label>
          <label>
            <img src="../../Assets/mobile.svg" alt="" />
            <input
              type="checkbox"
              name="platforms"
              value="mobile"
              checked={isXboxChecked.mobile}
              onChange={(e) => updatePlatforms(e.target.value)}
            />
          </label>
        </div>
      </fieldset>
      <fieldset className="gamelist">
        <div>
          <label>
            Add New Game :
            <DataList />
            <input type="submit" value="Add" />
          </label>
        </div>
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

      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
