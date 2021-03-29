import React from "react";
import { updateUser } from "../../../utils/fetchUsers";

function EditUsername(props) {
  const [newUsername, setNewUsername] = React.useState("");

  const saveUsername = () => {
    const url = "username";
    updateUser(url, { id: props.userId, username: newUsername })
      .then(() => {
        console.log("Changed Successfully");
        props.setTriggerUsername(false);
        props.setTrigger(false);
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return props.triggerUsername ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerUsername(false);
            props.setTrigger(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#c4c4c4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h1>Change Your Username</h1>
        <form>
          <label>New Username :</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input type="button" value="Save" onClick={() => saveUsername()} />
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditUsername;
