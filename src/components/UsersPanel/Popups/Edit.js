import React from "react";

function Edit(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Edit;
