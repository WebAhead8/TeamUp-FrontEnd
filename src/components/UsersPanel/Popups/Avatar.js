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
    props.closeModal();
  };

  const listAvatar = props.avatarImgFile.map((img) => (
    <li>
      <img
        src={img.avatarsrc}
        alt={img.avatarname}
        name={img.avatarname}
        value={img.avatarsrc}
        id={img.id}
        width="70px"
        height="70px"
        onClick={setIcone}
      />
    </li>
  ));

  return <ul className="avatar-pop">{listAvatar}</ul>;
}

export default Avatar;
