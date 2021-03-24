import React from "react";
import mainFetch from "../../utils/mainFetch";
import { BrowserRouter as useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function GamerProf() {
  let query = useQuery();
  let id = query.get("id");
  console.log("other id ", id);
  const [gamers, setGamers] = React.useState([]);
  React.useEffect(() => {
    const url = `/users/${id}`;
    mainFetch(url).then((data) => {
      setGamers(data);
      console.log("gamers ", gamers.username);
    });
  }, []);
  return <div>{gamers.email}</div>;
}
export default GamerProf;
