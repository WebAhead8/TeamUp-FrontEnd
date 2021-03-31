import React from "react";
import mainFetch from "../../utils/mainFetch";
import { DelRoom } from "../../utils/fetchRooms";
import { Link } from "react-router-dom";

function InsideRoom() {
  let id = window.location.href.split("=")[1];
  let game = window.location.href.split("=")[2];
  let gameid = window.location.href.split("=")[3];
  const [room, setRoom] = React.useState([]);
  const [host, setHost] = React.useState();
  const [isHost, setIsHost] = React.useState(false);
  let loggedInUser = window.localStorage.getItem("username");

  React.useEffect(() => {
    const url = `/rooms/${id}`;
    mainFetch(url)
      .then((room) => {
        setRoom(room);
        setHost(room[0].host);
        if (host) {
          getLoggedUserId();
        }
      })
      .catch((err) => {
        window.location.href = "/error";
        console.log("Error from main fetch InsideRoom Component ", err);
      });
  }, [host]);

  const getLoggedUserId = () => {
    const url = `/user/${loggedInUser}`;
    mainFetch(url).then((data) => {
      if (host === data.id) {
        setIsHost(true);
      } else {
        setIsHost(false);
      }
    });
  };

  const deleteRoom = () => {
    // /rooms/:id"
    DelRoom(room.id);
    window.location.href = "/rooms";
  };

  return (
    <div className="insideroom">
      {room.map((room) => (
        <div className="insideroomm">
          <h2>{room.rname}</h2>
          {isHost ? <button onClick={deleteRoom}>Delete Room</button> : ""}
          <Link
            className="a"
            to={{
              pathname: "/rooms",
              search: `id=${gameid}=gname=${game}`,
            }}
          >
            Leave Room
          </Link>

          <div className="roomdesc">
            <div className="rules-hdr">
              <h4>Room Rules : </h4>
              <p>{room.descr}</p>
            </div>

            <div className="rules">
              <h4>Standards :</h4>
              <p>Language : {room.lang}</p>
              <p>Age : {room.age}</p>
              <p>Console : {room.platform}</p>
              <p>Skills : {room.skill}</p>
            </div>
          </div>
          <div className="players">
            <ul>
              <h1> Gamers Joined The Room :</h1>
              {room.gamers
                ? room.gamers.map((plat) => <li id={plat.id}>{plat}</li>)
                : ""}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
export default InsideRoom;
