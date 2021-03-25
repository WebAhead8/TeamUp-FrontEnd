import React from "react";
import mainFetch from "../../utils/mainFetch";
import { createRoom } from "../../utils/fetchRooms";

function CreateRoom() {
  const [userId, setUserId] = React.useState();

  const username = window.localStorage.getItem("username");
  const ganmeid = window.location.href.split("=")[1];
  const gameName = window.location.href.split("=")[2];

  const [createRoomInfo, setCreateRoomInfo] = React.useState(null);

  React.useEffect(() => {
    const url = `/user/${username}`;
    mainFetch(url).then((user) => {
      setUserId(user.id);
    });
  }, []);

  React.useEffect(() => {
    setCreateRoomInfo({
      rname: "",
      gname: ganmeid,
      gamers: [username],
      host: userId,
      maxgamers: "",
      descr: "",
      lang: " ",
      age: "",
      skill: [],
      platform: "",
    });
  }, [userId]);

  function handelChange(event) {
    const { name, value } = event.target;
    if (name === "skill") {
      setCreateRoomInfo((prevValue) => {
        return {
          ...prevValue,
          skill: value.split(","),
        };
      });
      return;
    }
    setCreateRoomInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    createRoom(createRoomInfo);
    window.location.href = `/rooms?id=${ganmeid}=gname=${gameName}`;
  };

  return (
    <div className="login-form">
      <h1>Create your own room on your own rules!</h1>
      <div className="container">
        <form className="form" onSubmit={onSubmit}>
          <label>
            Room Name:
            <input
              type="text"
              name="rname"
              id="rname"
              onChange={handelChange}
              required
            ></input>
          </label>
          <br />
          <label>
            How Many Gamers:
            <input
              type="number"
              name="maxgamers"
              id="maxgamers"
              onChange={handelChange}
              required
            ></input>
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="descr"
              id="descr"
              onChange={handelChange}
              required
            ></input>
          </label>
          <br />
          <label>
            Language:
            <input
              type="text"
              name="lang"
              id="lang"
              onChange={handelChange}
              required
            ></input>
          </label>
          <br />
          <label>
            Age:
            <input
              type="text"
              name="age"
              id="age"
              onChange={handelChange}
              required
            ></input>
          </label>
          <br />
          <label>
            Skill:
            <input
              type="text"
              name="skill"
              id="skill"
              onChange={handelChange}
            ></input>
          </label>
          <br />
          <label>
            platform:
            <input
              type="text"
              name="platform"
              id="platform"
              onChange={handelChange}
              required
            ></input>
          </label>
          <br />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom;
