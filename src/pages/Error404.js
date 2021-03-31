import React from "react";

function Error404() {
  return (
    <div className="error">
      <div className="container">
        <div className="left-col">
          <h3> error 404</h3>
          <p>The page you wanted not found, or it has been removed.</p>
          <a href="/Home">Home</a>
        </div>
        <div className="right-col">
          <img src="./Assets/ERROR404.svg" alt="" className="hero" />
        </div>
      </div>
    </div>
  );
}

export default Error404;
