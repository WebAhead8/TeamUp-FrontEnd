import React from "react";
import mainFetch from "../../utils/mainFetch";
import { Link } from "react-router-dom";

function InsideRoom() {
  let id = window.location.href.split("=")[1];
  let game = window.location.href.split("=")[2];

  const [room, setRoom] = React.useState([]);

  React.useEffect(() => {
    const url = `/rooms/${id}`;
    mainFetch(url).then((room) => {
      setRoom(room);
      console.log(room);
    });
  }, []);

  return (
    <div className="insideroom">
      {room.map((room) => (
        <div className="insideroomm">
          <h2>{room.rname}</h2>

          <Link
            className="a"
            to={{
              pathname: "/rooms",
              search: `id=${id}=gname=${game}`,
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
