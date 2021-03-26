import React from "react";
import mainFetch from "../../utils/mainFetch";
import { Link } from "react-router-dom";

function Rooms() {
  let id = window.location.href.split("=")[1];
  let gnameuncorrect = window.location.href.split("=")[3];

  let gname = gnameuncorrect.replace(/%20/g, " ");

  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    const url = `/grooms/${id}`;
    mainFetch(url).then((data) => {
      setRooms(data);
    });
  }, []);

  return (
    <div>
      <h1 className="insideGameNameRoom">{gname} ROOMS </h1>
      <div className="CreateRoom-link">
        <Link to={{ pathname: "/createRoom", search: `id=${id}=${gname}` }}>
          Create Room
        </Link>
      </div>
      <div className="LeaveGame-link">
        <Link to={{ pathname: "/games" }}>Leave Game</Link>
      </div>
      <ul className="roomsList">
        {rooms.map((room) => (
          <div className="outsideRoom">
            <div className="roomdesc">
              <p>{room.rname}</p>
              <p>{room.descr}</p>
              <p>{room.land}</p>
              <p>{room.age}</p>
              <p>{room.skill}</p>
              <p>{room.platform}</p>
            </div>
            <li className="room" key={room.id}>
              <Link
                to={{
                  pathname: "/insideRoom",
                  search: `id=${id}=${gname}`,
                }}
              >
                JOIN
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
