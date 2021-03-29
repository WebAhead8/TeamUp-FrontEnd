import React from "react";

function Avatar(props) {
  const setIcone = (event) => {
    props.setAvatarIcon(event.target.src);
    props.setInputValue(event.target.name);
    props.setSignup((prevValue) => {
      return {
        ...prevValue,
        avatarIcon: event.target.src,
      };
    });
  };

  const listAvatar = props.avatarImgFile.map((img) => (
    <li>
      <img
        src={img.avatarsrc}
        alt="avatarIcon"
        name={img.avatarname}
        value={img.avatarsrc}
        id={img.id}
        width="50"
        height="50"
        onClick={setIcone}
      ></img>
    </li>
  ));

  return <ul>{listAvatar}</ul>;
}

export default Avatar;
