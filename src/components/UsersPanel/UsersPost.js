import React from "react";
import mainFetch from "../../utils/mainFetch";
import { Link } from "react-router-dom";

function UsersPost({ user }) {
  const [posts, setPosts] = React.useState({});

  React.useEffect(() => {
    console.log("checking");
    mainFetch(`/posts/${user.id}`)
      .then((data) => {
        if (data.length) {
          setPosts(data);
        } else {
          setPosts({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return posts.length ? (
    <ul>
      {posts.map((post) => (
        <>
          <li className="post" key={post.id} className="myposts">
            {post.content}
            <i>
              {post.liked}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-heart"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="#ff2825"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </i>
          </li>
        </>
      ))}
    </ul>
  ) : (
    <div>
      <i>
        {" "}
        You have no posts, navigate to the <Link to="/lobby">LOBBY</Link> and
        share some!
      </i>
    </div>
  );
}

export default UsersPost;
