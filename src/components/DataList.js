import React from 'react'
import mainFetch from "../utils/mainFetch";

function DataList() {
    const [games, setGames] = React.useState({});

    React.useEffect(() => {
        mainFetch("/games").then((data) => {
            setGames(data);
        }).catch(err => {
            console.log(err)
        })
        console.log("games ", games)
    }, []);
    return (
        <div>
            {games.length ? (
                <select>
                    {games.map((game) => (
                        <option className="gameName" key={game.id}>
                            {game.gname}
                        </option>
                    ))}
                </select>
            ) : (
                ""
            )}
        </div>
    )
}

export default DataList
