import React from "react";
import { updateUser } from "../../../utils/fetchUsers";

function EditPassword(props) {
  const [newpassword, setNewPassword] = React.useState("");

  const savePass = () => {
    const url = "password";
    updateUser(url, { id: props.userId, pass: newpassword })
      .then(() => {
        console.log("Changed Successfully");
        props.setTriggerPass(false);
        props.setTrigger(false);
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return props.triggerPass ? (

    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerPass(false);
            props.setTrigger(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c4c4c4" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h1>Change Your Password</h1>
        <form>
          <label>Current Password :</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Current Password"
          />
          <label>New Password :</label>
          <input
            type="password"
            name="newpassword"
            id="newpassword"
            placeholder="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm New Password :</label>
          <input
            type="password"
            name="password"
            id="email"
            placeholder="Retype New Password"
          />
          <input type="button" value="Save" onClick={() => savePass()} />
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditPassword;
