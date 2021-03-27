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
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerPass(false);
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

export default EditPassword;
