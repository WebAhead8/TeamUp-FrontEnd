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
    icon: <img src={homeIcon} />,
    cName: "nav-text",
  },
  {
    title: "Lobby",
    path: "/Lobby",
    icon: <img src={lobbyIcon} />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/Profile",
    icon: <img src={profileIcon} />,
    cName: "nav-text",
  },
  {
    title: "Rooms",
    path: "/Rooms",
    icon: <img src={roomsIcon} />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/Users",
    icon: <img src={usersIcon} />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
