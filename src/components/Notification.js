import React from "react";

function Notification(props) {
  return props.noti ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setNoti(false);
            window.location.href = props.link;
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
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-alert-circle"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="#ff4500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {props.children}
        </span>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Notification;
