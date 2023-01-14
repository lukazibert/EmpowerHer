import AppBar from "../components/AppBar";
import Post from "../components/Post";
import ProfileIcon from "../components/ProfileIcon";
import SearchBar from "../components/SearchBar";
import "../styles/CommunityView.css";
import { React, useEffect, useState } from "react";

export default function CommunityView() {
  const [posts, setPosts] = useState([]);

  //on first render fetch data
  useEffect(() => {
    fetchData();
  }, []);

  //set the responce to the post state
  const fetchData = ()  => {
    const res = [
      {
        id: 1,
        username: "Rachel Kim",
        mentor: true,
        content:
          "I started my business from scratch, with nothing but a dream and a small loan from my family. I worked hard to build my brand and establish a loyal customer base, and I was relentless in my pursuit of success.",
        liked: true,
      },
    ];
    setPosts(res);

    //   console.log(posts);
  }

  //change the like button / like post
  const setLike = (val, id) => {
    const newState = posts.map(obj => {
        // 👇️ if id equals 2, update country property
        if (obj.id == id) {
          return {...obj, liked: val};
        }
  
        // 👇️ otherwise return object as is
        return obj;
      });
  
      setPosts(newState);
  }

  return (
    <div>
      <div className="view">
        <SearchBar />
        {/* map trought all of the post and post elements */}
        {posts.map((post) => {
          return (
            <Post
              id={post.id}
              username={post.username}
              mentor={post.mentor}
              content={post.content}
              liked={post.liked}
              setLike={setLike}
            />
          );
        })}
      </div>
    </div>
  );
}
