import mainFetch from "../../utils/mainFetch";
import React from "react";

import { Link } from "react-router-dom";

function Games() {
  const [gameName, setGameName] = React.useState("");
  const [gamesList, setGamesList] = React.useState([]);

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  React.useEffect(() => {
    const url = `/games/${gameName}`;
    mainFetch(url)
      .then((data) => {
        setGamesList(data);
      })
      .catch((err) => (window.location.href = "/error"));
  }, [gameName]);

  return (
    <div className="gamespage">
      <div className="head-search">
        <h1>Search The Game You Want</h1>
        <form className="searchForm">
          <lable>
            <input
              type="text"
              name="searchGame"
              placeholder="Game Name"
              onChange={handleChange}
              value={gameName}
            ></input>
          </lable>
        </form>
      </div>
      <div className="gamesList">
        <h3>TOP GAMES</h3>
        <ul className="game-list">
          {gamesList.map((game) => (
            <Link
              className="a"
              to={{
                pathname: "/rooms",
                search: `gameid=${game.id}=gname=${game.gname}`,
              }}
            >
              <li className="gameName" key={game.id}>
                {game.gname}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Games;
