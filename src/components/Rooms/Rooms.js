import React from "react";
import mainFetch from "../../utils/mainFetch";
import { BrowserRouter as useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Rooms() {
  let id = window.location.href.split("=")[1];

  // let query = useQuery();
  // let id = query.get("id");
  // console.log(id);
  // const [rooms, setRooms] = React.useState("");

  // React.useEffect(() => {
  //   const url = "/rooms";
  //   mainFetch(url).then((data) => setRooms(data));
  // }, []);

  React.useEffect(() => {
    const url = `/grooms/${id}`;
    mainFetch(url).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>Search The ROOM You Want </h1>
    </div>
  );
}

export default Rooms;
