import React from "react";
import { deleteUser } from "../../../utils/fetchUsers";


function DeleteAccount(props) {
  const delUser = () => {
    const url = "password";
    deleteUser(props.id)
      .then(() => {
        console.log("Changed Successfully");
        props.setTriggerDelete(false);
        props.setTrigger(false);
        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        window.location.href = "/signup";
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return props.triggerDelete ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Delete My Account</h1>
        <p> Are you sure you want to delete your account at TeamUP?</p>
        <button
          onClick={() => {
            props.setTriggerDelete(false);
            props.setTrigger(true);
          }}
        >
          No
        </button>
        <button onClick={() => delUser()}> Yes </button>
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerDelete(false);
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

export default DeleteAccount;
