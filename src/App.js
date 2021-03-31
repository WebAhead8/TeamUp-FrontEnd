import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.css";
import Rooms from "./components/Rooms/Rooms";
import InsideRoom from "./components/Rooms/InsideRoom";
import CreacteRoom from "./components/Rooms/CreateRoom";
import Login from "./components/UsersPanel/Login";
import SignUp from "./components/UsersPanel/SignUp";
import Lobby from "./components/Lobby/Lobby";
import Profile from "./components/UsersPanel/Profile";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Support from "./pages/Support";
import Error404 from "./pages/Error404";
import Logo from "./components/Logo";
import Gamers from "./components/UsersPanel/Gamers";
import Footer from "./components/Footer";
import Games from "./components/Games/Games";
import GamerProf from "./components/UsersPanel/GamerProf";
import Nav from "./components/NavBar/Navbar";

function App() {
  return (
    <Router>
      <Nav />
      <div className="menu-logo-hdr">
        <Logo />
      </div>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/games/" exact component={Games} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/insideRoom" exact component={InsideRoom} />
        <Route path="/createRoom" exact component={CreacteRoom} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/lobby" exact component={Lobby} />
        <Route path="/gamers" exact component={Gamers} />
        <Route path="/users" component={GamerProf} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/error" exact component={Error404} />
        <Route path="/support" exact component={Support} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
