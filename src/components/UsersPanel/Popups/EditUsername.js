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

  }

  return props.triggerUsername ? (
    <div className="popup">
      <div className="popup-inner">
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
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerUsername(false);
            props.setTrigger(true);
          }}
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditUsername;
