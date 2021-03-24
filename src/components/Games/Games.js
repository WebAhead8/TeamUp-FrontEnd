import mainFetch from "../../utils/mainFetch";
import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Games() {
  const [gameName, setGameName] = React.useState("");
  const [gamesList, setGamesList] = React.useState([]);
  //   const [gameId, setGameId] = React.useState("");

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  React.useEffect(() => {
    const url = `/games/${gameName}`;
    mainFetch(url).then((data) => {
      setGamesList(data);
    });
  }, [gameName]);

  return (
    <div className="page">
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
            <li className="gameName" key={game.id}>
              <Link to={{ pathname: "/rooms", search: `id=${game.id}` }}>
                {game.gname}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Games;
