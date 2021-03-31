import React from "react";
import mainFetch from "../../utils/mainFetch";
import { createRoom } from "../../utils/fetchRooms";

function CreateRoom() {
  const [userId, setUserId] = React.useState();

  const username = window.sessionStorage.getItem("username");
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
      skill: "",
      platform: "",
    });
  }, [userId]);

  function handelChange(event) {
    const { name, value } = event.target;
    setCreateRoomInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    createRoom(createRoomInfo).then((data) => {
      window.location.href = `/insideRoom?roomid=${data[0].id}=gname=${gameName}`;
    });
  };

  return (
    <div className="create-room">
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
            />
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
            />
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
            />
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
            />
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
            />
          </label>
          <br />
          <label>
            Skill:
            <input
              type="text"
              name="skill"
              id="skill"
              onChange={handelChange}
            />
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
            />
          </label>
          <br />
          <button type="submit">Create</button>
          <button onClick={() => (window.location.href = "/games")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom;
