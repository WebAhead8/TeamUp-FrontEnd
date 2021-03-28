import React from "react";
import mainFetch from "../../utils/mainFetch";

function UsersPost({ user }) {
  const [posts, setPosts] = React.useState({});
  console.log(posts, "these are my posts");
  React.useEffect(() => {
    mainFetch(`/posts/${user.id}`)
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {posts ? (
        <div>
          <ul>
            {posts.map((post) => (
              <li className="post" key={post.id}>
                {post.content}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <i> You have no posts, navigate to the lobby and share some!</i>
        </div>
      )}
    </div>
  );
}

export default UsersPost;
