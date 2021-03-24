import React from "react";
import mainFetch from "../../utils/mainFetch";

function Lobby() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const url = "/AllPosts";
    mainFetch(url).then((data) => {
      setPosts(data);
    });
  }, []);
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <h1>{post.content}</h1>
      ))}
    </>
  );
}

export default Lobby;
