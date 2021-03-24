import React from "react";
import "./style/main.css";
import Navbar from "./components/NavBar/Navbar";
import Rooms from "./components/Rooms/Rooms";
import Login from "./components/UsersPanel/Login";
import SignUp from "./components/UsersPanel/SignUp";
import Profile from "./components/UsersPanel/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Logo />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/landingpage" exact component={LandingPage} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
