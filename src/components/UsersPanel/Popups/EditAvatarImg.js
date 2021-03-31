import React from "react";
import mainFetch from "../../../utils/mainFetch";
import { updateUser } from "../../../utils/fetchUsers";

function EditAvatarImg(props) {
  const [newAvatarImg, setNewAvatarImg] = React.useState("");
  const [avatarImg, setAvatarImg] = React.useState([]);

  React.useEffect(() => {
    mainFetch("/avatarImg").then((data) => {
      setAvatarImg(data);
    });
  }, []);

  const setIcon = (event) => {
    setNewAvatarImg(event.target.src);
  };

  const onChange = () => {
    const url = "avatarimg";
    updateUser(url, { id: props.userId, avatarIcon: newAvatarImg })
      .then(() => {
        console.log("Changed Successfully");
        props.setTriggerAvatar(false);
        props.setTrigger(false);
        props.onChange(newAvatarImg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listAvatar = avatarImg.map((img) => (
    <img
      src={img.avatarsrc}
      alt={img.avatarname}
      name={img.avatarname}
      value={img.avatarsrc}
      id={img.id}
      width="50px"
      height="50px"
      onClick={setIcon}
    ></img>
  ));

  return props.triggerAvatar ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTriggerAvatar(false);
            props.setTrigger(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#c4c4c4"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h1>Change Your Avatar Img</h1>
        <ul>{listAvatar}</ul>
        <button onClick={onChange}>SAVE</button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default EditAvatarImg;
