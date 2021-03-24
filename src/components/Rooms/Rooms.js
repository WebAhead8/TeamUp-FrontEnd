import React from "react";
import mainFetch from "../../utils/mainFetch";

function Rooms() {
  const [rooms, setRooms] = React.useState("");

  React.useEffect(() => {
    const url = "/rooms";
    mainFetch(url).then((data) => setRooms(data));
  }, []);

  React.useEffect(() => {
    const gameId = rooms.gname;
    const url = `/game/${gameId}`;
    mainFetch(url).then((data) => {});
  });

  return (
    <div>
      <h1>Search The ROOM You Want </h1>
    </div>
  );
}

export default Rooms;
