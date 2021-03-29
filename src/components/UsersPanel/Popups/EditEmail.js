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
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerEmail(false);
            props.setTrigger(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c4c4c4" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h1>Change Your Email</h1>
        <form>
          <label>Current Email :</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label>New Email :</label>
          <input type="email" name="newemail" id="newemail" placeholder="Email" onChange={(e) => setNewEmail(e.target.value)} />
          <input type="button" value="Save" onClick={() => saveEmail()} />
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditEmail;
