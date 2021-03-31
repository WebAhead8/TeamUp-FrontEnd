import React from "react";
import mainFetch from "../../utils/mainFetch";
import { DelRoom } from "../../utils/fetchRooms";
import { Link } from "react-router-dom";

function InsideRoom() {
  let id = window.location.href.split("=")[1];
  let game = window.location.href.split("=")[2];
  let gameid = window.location.href.split("=")[3];
  let loggedInUser = window.sessionStorage.getItem("username");
  const [room, setRoom] = React.useState([]);
  const [host, setHost] = React.useState();
  const [isHost, setIsHost] = React.useState(false);

  // Gets all the data of the room and
  React.useEffect(() => {
    const url = `/rooms/${id}`;
    mainFetch(url)
      .then((room) => {
        setRoom(room);
        setHost(room[0].host);
        console.log("host ", host);
        if (host) {
          getLoggedUserId();
        }
      })
      .catch((err) => {
        window.location.href = "/error";
        console.log("Error from main fetch InsideRoom Component ", err);
      });
  }, [host]);
  // Gets the username logged to get it's id
  const getLoggedUserId = () => {
    const url = `/user/${loggedInUser}`;
    mainFetch(url)
      .then((data) => {
        console.log("user id ", loggedInUser);
        if (data) {
          if (host === data.id) {
            setIsHost(true);
          } else {
            setIsHost(false);
          }
        }
      })
      .catch((err) => (window.location.href = "/error"));
  };

  const deleteRoom = (id) => {
    DelRoom(id);
    window.location.href = `rooms?gameid=${gameid}=gname=${game}`;
  };
  return (
    <div className="insideroom">
      {room.map((room) => (
        <div className="insideroomm">
          <h2>{room.rname}</h2>
          <div className="buttons">
            {isHost ? (
              <button onClick={() => deleteRoom(room.id)}>Delete Room</button>
            ) : (
              ""
            )}
            <Link
              className="a"
              to={{
                pathname: "/rooms",
                search: `id=${gameid}=gname=${game}`,
              }}
            >
              Leave Room
            </Link>
          </div>

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
