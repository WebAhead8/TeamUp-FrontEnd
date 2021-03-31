import React from "react";
import mainFetch from "../../utils/mainFetch";

function Lobby() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const url = "/AllPosts";
    mainFetch(url)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => (window.location.href = "/error"));
  }, []);
  console.log(posts);
  return posts ? (
    <div className="allposts">
      {posts.map((post) => (
        <div className="post">
          <h1>
            {post.username}
            <p>
              {post.liked}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-heart"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="#3b6978"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </p>
          </h1>
          <h4>{post.content}</h4>
        </div>
      ))}
    </div>
  ) : (
    <h4>There is no posts :(</h4>
  );
}

export default Lobby;
