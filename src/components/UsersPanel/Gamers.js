import React, { useState, useEffect } from "react";
import mainFetch from "../../utils/mainFetch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GamerProf from "./GamerProf";


function Gamers() {
  const [gamers, setGamers] = useState([]);

  React.useEffect(() => {
    const url = "/users";
    mainFetch(url).then((data) => {
      setGamers(data);
      console.log("gamers ", gamers);
    });
  }, []);

  const Gamers = ({ id, username, gamelist }) => (
    <div>
      <Link
        to={{
          pathname: '/users',
          search: `id=${id}`,
        }}>
        {username}
      </Link>
      {gamelist}
    </div>
  );

  return (
    <div>
      {gamers.map((p, i) => (
        <Gamers {...p} key={i} />
      ))}
    </div>);
}
export default Gamers;