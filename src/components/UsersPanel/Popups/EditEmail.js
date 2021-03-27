import React from "react";
import { updateUser } from "../../../utils/fetchUsers";

function EditEmail(props) {
  const [newEmail, setNewEmail] = React.useState("");

  const saveEmail = () => {
    const url = "email";
    updateUser(url, { id: props.userId, email: newEmail })
      .then((data) => {
        console.log("Changed Successfully");
        props.setTriggerEmail(false);
        props.setTrigger(false);
        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return props.triggerEmail ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Change Your Email</h1>
        <form>
          <label>Current Email :</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label>New Email :</label>
          <input type="email" name="newemail" id="newemail" placeholder="Email" onChange={(e) => setNewEmail(e.target.value)} />
          <input type="button" value="Save" onClick={() => saveEmail()} />
        </form>
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerEmail(false);
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

export default EditEmail;
