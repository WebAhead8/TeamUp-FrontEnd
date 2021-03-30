import React from "react";
import mainFetch from "../utils/mainFetch";
import { updateUser } from "../utils/fetchUsers";

function DataList({ user }) {
  const [games, setGames] = React.useState({});
  const [selectedIndex, setSelectedIndex] = React.useState("Pubg");

  const addGame = () => {
    if (user.gamelist) {
      if (!user.gamelist.includes(selectedIndex)) {
        user.gamelist.push(selectedIndex);
      }
    }
    const url = "gameslist";

    updateUser(url, { id: user.id, gamelist: user.gamelist })
      .then((data) => console.log("games ", data))
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setSelectedIndex(e.target.value);
  };
  React.useEffect(() => {
    mainFetch("/games")
      .then((data) => {
        setGames(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="gamedatalist">
      {games.length ? (
        <select onChange={(e) => handleChange(e)}>
          {games.map((game) => (
            <option className="gameName" key={game.id} value={game.gname}>
              {game.gname}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
      <button
        className="add-game"
        onClick={() => {
          addGame();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plus"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
}

export default DataList;
