import React from "react";
import mainFetch from "../../utils/mainFetch";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> ecd2cd6b42d09ec3519ff9b07d026575b046533d
// import GamerProf from "./GamerProf";

function Gamers() {
  const [gamers, setGamers] = React.useState([]);

  React.useEffect(() => {
    const url = "/users";
    mainFetch(url).then((data) => {
      setGamers(data);
    });
  }, []);

  const Gamers = ({ id, username, gamelist }) => (
    <div>
      <Link
        to={{
          pathname: "/users",
          search: `id=${id}`,
        }}
      >
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
    </div>
  );
}
export default Gamers;
