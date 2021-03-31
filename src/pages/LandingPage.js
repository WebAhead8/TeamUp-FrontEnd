import React from "react";

function LandingPage() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left-col">
          <p>Connect with other gamers to meet the right team</p>
          <a href="/signup">Join</a>
        </div>
        <div className="right-col">
          <img src="./Assets/land.svg" alt="" className="hero" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
