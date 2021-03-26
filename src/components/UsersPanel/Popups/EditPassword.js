import React from "react";

function EditPassword(props) {
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
          />
          <label>Confirm New Password :</label>
          <input
            type="password"
            name="password"
            id="email"
            placeholder="Retype New Password"
          />
          <input type="submit" value="Save" />
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
