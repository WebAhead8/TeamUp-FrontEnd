import React from "react";
import mainFetch from "../../utils/mainFetch";
import { Link } from "react-router-dom";

function Rooms() {
  let id = window.location.href.split("=")[1];
  let gnameuncorrect = window.location.href.split("=")[3];

  let gname = gnameuncorrect.replace(/%20/g, " ");

  const [rooms, setRooms] = React.useState([]);
  console.log(rooms);
  React.useEffect(() => {
    const url = `/grooms/${id}`;
    mainFetch(url).then((data) => {
      setRooms(data);
    });
  }, []);

  return (
    <div className="rooms">
      <h1 className="insideGameNameRoom">{gname} ROOMS </h1>
      <div className="links">
        <div className="CreateRoom-link">
          <Link
            to={{ pathname: "/createRoom", search: `id=${id}=${gname}` }}
            className="a"
          >
            Create Room
          </Link>
        </div>
        <div className="LeaveGame-link">
          <Link className="a" to={{ pathname: "/games" }}>
            Leave Game
          </Link>
        </div>
      </div>
      <ul className="roomsList">
        {rooms.map((room) => (
          <div className="outsideRoom">
            <div className="roomdesc">
              <h1>{room.rname}</h1>
              <div className="desc">
                <div>
                  Rules :<p>{room.descr}</p>
                </div>
                <div>
                  <p>Language : {room.lang}</p>
                  <p>Age : {room.age}</p>
                  <p>Skills : {room.skill}</p>
                  <p>Platform : {room.platform}</p>
                </div>
              </div>
              <div className="joinbtn">
                <li className="a" key={room.id}>
                  <Link
                    to={{
                      pathname: "/insideRoom",
                      search: `roomid=${room.id}=${gname}=${id}`,
                    }}
                  >
                    JOIN
                  </Link>
                </li>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
