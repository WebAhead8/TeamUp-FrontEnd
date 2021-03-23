import React from "react";
import mainFetch from "../../utils/mainFetch";

function Rooms() {
  const [rooms, setRooms] = React.useState("");

  React.useEffect(() => {
    const url = "/rooms";
    mainFetch(url).then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Rooms</h1>
    </div>
  );
}

export default Rooms;
