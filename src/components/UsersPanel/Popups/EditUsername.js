import React from "react";

function EditUsername(props) {
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
          />
          <input type="submit" value="Save" />
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
