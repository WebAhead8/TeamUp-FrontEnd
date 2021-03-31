import React from "react";
import mainFetch from "../../utils/mainFetch";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";

function Gamers() {
  const [gamers, setGamers] = React.useState([]);

  React.useEffect(() => {
    const url = "/users";
    mainFetch(url)
      .then((data) => {
        setGamers(data);
      })
      .catch((err) => (window.location.href = "/error"));
  }, []);

  const Gamers = ({ id, username, gamelist }) => (
    <div className="gamers">
      <div className="container">
        <Link
          className="a"
          to={{
            pathname: "/users",
            search: `id=${id}`,
          }}
        >
          <h1> {username}</h1>
        </Link>
        <i> Fav Games : {gamelist}</i>
      </div>
    </div>
  );

  return gamers ? (
    <div className="gamers-cont">
      <h3>Find Gamers With The Same GameList As Yours</h3>
      <div className="gamers-grid">
        {gamers.map((p, i) => (
          <Gamers {...p} key={i} />
        ))}
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
}
export default Gamers;
