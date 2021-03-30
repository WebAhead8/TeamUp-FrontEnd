import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="sec-con">
          <div className="left-col">
            <div className="inside">
              <h2>Welcome To TeamUP!</h2>
              <p>Now you can play peacefully with a team as you like</p>
              <div className="btns">
                <a href="/signup">SIGN UP</a>
                <a href="/login">LOGIN</a>
              </div>
            </div>
          </div>
          <div className="right-col">
            <img src="./Assets/home.svg" alt="" />
          </div>
        </div>

        <div className="home-body">
          <section>
            <h1> About </h1>
            <p>
              Many of the gamers(including me) struggle to find a good team to
              play with that suits the game night mood. TeamUP helps you to find
              and join a team at a specifice rules you set.
            </p>
          </section>
          <section className="s2">
            <h1> How It Works? </h1>
            <p>
              If you are new to TeamUP and don't know how to use it, here is
              your guide.
              <br />
              <span>Step 1 : </span> Create An account if you don't have one.
              <br />
              <span>Step 2 : </span> Navigate to the rooms page and pick the
              game you are playing.
              <br />
              <span>Step 3 : </span> Find a room that suits you or create one!
              <br />
              <span>Step 4 : </span> You can navigate to the lobby and share a
              post.
              <br />
            </p>
          </section>
          <section>
            <h1>Support / FQA</h1>
            <p>
              If you need any help, or the game you play is not there, please
              feel free to contact us.
            </p>
            <a href="/support">Support Page</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
