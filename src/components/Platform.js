import React from "react";

import { updateUser } from "../utils/fetchUsers";

function Plateform({ user, setUser }) {
  const Plateform = ["ps", "xbox", "pc", "mobile"];
  const [selectIndex, setSelectIndex] = React.useState("Pubg");
  const [userAfter, setUserAfter] = React.useState({});

  React.useEffect(() => {
    setUser(userAfter);
  }, [userAfter]);

  const addplatform = () => {
    if (user.platform) {
      if (!user.platform.includes(selectIndex)) {
        user.platform.push(selectIndex);
      }
    }
    const url = "platforms";

    updateUser(url, { id: user.id, platform: user.platform })
      .then((data) => setUserAfter(data))
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setSelectIndex(e.target.value);
  };
  return (
    <div className="gamedatalist">
      {Plateform.length ? (
        <select onChange={(e) => handleChange(e)}>
          {Plateform.map((plat) => (
            <option className="gameName" key={plat} value={plat}>
              {plat}
            </option>
          ))}
        </select>
      ) : (
        ""
      )}
      <button
        className="add-game"
        onClick={() => {
          addplatform();
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

export default Plateform;
