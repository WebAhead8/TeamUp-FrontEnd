import React from "react";

import * as IoIcons from "react-icons/io";

import homeIcon from "../../Assets/Home.svg";
import lobbyIcon from "../../Assets/Lobby.svg";
import profileIcon from "../../Assets/Profile.svg";
import roomsIcon from "../../Assets/Rooms.svg";
import usersIcon from "../../Assets/Users.svg";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <img src={homeIcon} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Lobby",
    path: "/lobby",
    icon: <img src={lobbyIcon} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <img src={profileIcon} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Rooms",
    path: "/rooms",
    icon: <img src={roomsIcon} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/users",
    icon: <img src={usersIcon} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle alt="" />,
    cName: "nav-text",
  },
];
