import React from "react";
import "./style/main.css";
// import Navbar from "./components/NavBar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import Login from "./components/UsersPanel/Login";
import SignUp from "./components/UsersPanel/SignUp";
import Lobby from "./components/Lobby/Lobby";
import Profile from "./components/UsersPanel/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Logo from "./components/Logo";
import Gamers from "./components/UsersPanel/Gamers";
import Footer from "./components/Footer";
import Games from "./components/Games/Games";
import GamerProf from "./components/UsersPanel/GamerProf";

function App() {
  return (
    <>
      <Router>
        <Logo />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/landingpage" exact component={LandingPage} />
          <Route path="/games/" exact component={Games} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/lobby" exact component={Lobby} />
          <Route path="/gamers" exact component={Gamers} />
          <Route path="/users" component={GamerProf} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
