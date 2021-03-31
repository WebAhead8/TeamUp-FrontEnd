import React from "react";
import { deleteUser } from "../../../utils/fetchUsers";

function DeleteAccount(props) {
  const delUser = () => {
    const url = "password";
    deleteUser(props.id)
      .then(() => {
        props.setTriggerDelete(false);
        props.setTrigger(false);
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("username");
        window.location.href = "/signup";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return props.triggerDelete ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerDelete(false);
            props.setTrigger(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#c4c4c4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h1>Delete My Account</h1>
        <p> Are you sure you want to delete your account at TeamUP?</p>
        <section>
          <button
            className="no-btn"
            onClick={() => {
              props.setTriggerDelete(false);
              props.setTrigger(true);
            }}
          >
            No
          </button>
          <button onClick={() => delUser()} className="yes-btn">
            {" "}
            Yes{" "}
          </button>
        </section>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DeleteAccount;
