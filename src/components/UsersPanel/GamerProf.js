import React from "react";
import mainFetch from "../../utils/mainFetch";
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
    mainFetch(url).then((data) => {
      setGamers(data);
    });
  }, []);

  return (
    <div className="userProf">
      <div className="userIcon">
        <img src={gamers.avataricon} alt="icon"></img>
      </div>
      <div className="userInfo">
        <fieldset>
          <legend>USER Info</legend>
          <h4>First Name: {gamers.firstname}</h4>
          <h4>Last Name: {gamers.lastname}</h4>
          <h4>Username: {gamers.username}</h4>
          <h4>E-Mail: {gamers.email}</h4>
          <ul>Games List: </ul>
          <ul>Platform: </ul>
        </fieldset>
      </div>
    </div>
  );
}
export default GamerProf;
