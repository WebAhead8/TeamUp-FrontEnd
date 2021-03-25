import React from "react";
import mainFetch from "../../utils/mainFetch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <>
      {room.map((room) => (
        <div className="insideroom">
          <h2>{room.rname}</h2>
          <div>
            <Link
              to={{
                pathname: "/rooms",
                search: `id=${id}=gname=${game}`,
              }}
            >
              Leave Room
            </Link>
          </div>
          <div className="roomdesc">
            <p>{room.descr}</p>
            <p>{room.land}</p>
            <p>{room.age}</p>
            <p>{room.skill}</p>
            <p>{room.platform}</p>
          </div>
          <div className="players">
            <ul>
              <li>{room.gamers}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
export default InsideRoom;
