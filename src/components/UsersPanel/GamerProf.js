import React from "react";
import mainFetch from "../../utils/mainFetch";
import LoadingPage from "../../pages/LoadingPage";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function GamerProf() {
  let query = useQuery();
  let id = query.get("id");
  const [gamers, setGamers] = React.useState([]);

  React.useEffect(() => {
    const url = `/users/${id}`;
    mainFetch(url)
      .then((data) => {
        setGamers(data);
      })
      .catch((err) => {
        console.log(err);
        window.location.href = "/error";
      });
  }, []);

  return gamers ? (
    <div className="userProf">
      <div className="userIcon">
        <img src={gamers.avataricon} alt="icon" />
      </div>
      <div className="userInfo">
        <fieldset>
          <legend>USER Info</legend>
          <h4>First Name: {gamers.firstname}</h4>
          <h4>Last Name: {gamers.lastname}</h4>
          <h4>Username: {gamers.username}</h4>
          <h4>E-Mail: {gamers.email}</h4>
          <ul>
            <i>Games List:</i>
            {gamers.gamelist
              ? gamers.gamelist.map((game) => <li id={game.id}>{game}</li>)
              : ""}
          </ul>
          <ul>
            <i> Platform:</i>
            <div className="gamer-plat">
              {gamers.platform
                ? gamers.platform.map((plat) => (
                    <img src={`../../Assets/${plat}.svg`} alt={plat} />
                  ))
                : ""}
            </div>
          </ul>
        </fieldset>
        <div className="back">
          <a href="./gamers" className="backbtn">
            Back
          </a>
        </div>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
}
export default GamerProf;
