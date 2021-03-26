import React from "react";

function EditEmail(props) {
  return props.triggerEmail ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Change Your Email</h1>
        <form>
          <label>Current Email :</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label>New Email :</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="submit" value="Save" />
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
