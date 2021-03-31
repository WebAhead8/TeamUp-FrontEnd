import React from "react";

function Support() {
  return (
    <div className="support">
      <div className="container">
        <div className="left-col">
          <h1>Need Help?</h1>
          <p>Send Us a message describe your problem.</p>
          <img src="./Assets/support.svg" alt="" />
        </div>
        <div className="right-col">
          <form
            action="mailto:support@teamup.com"
            method="post"
            enctype="text/plain"
          >
            <label>Your Full Name : (First & Last)</label>
            <input type="text" name="name" />

            <label>Your Email :</label>
            <input type="email" name="email" />

            <label>Your Message : </label>
            <textarea></textarea>

            <input type="submit" value="SEND" className="send-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
