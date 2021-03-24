import React, { useState, useEffect } from "react";
import mainFetch from "../../utils/mainFetch";


function Lobby() {
    const [posts, setPosts] = useState({});
    React.useEffect(() => {
        const url = "/AllPosts";
        mainFetch(url).then((data) => setPosts(data));
        console.log(posts)
      }, []);
return (<><h1> {posts[0].content} </h1></>)
}

export default Lobby;
