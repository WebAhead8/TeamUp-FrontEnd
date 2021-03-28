import React from 'react';
import mainFetch from '../../utils/mainFetch';

function Lobby() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    const url = '/AllPosts';
    mainFetch(url).then((data) => {
      setPosts(data);
    });
  }, []);
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div>
          <h1>{post.content}</h1>
          <p>{post.username}</p>
          <p>{post.liked}</p>
        </div>
      ))}
    </>
  );
}

export default Lobby;
