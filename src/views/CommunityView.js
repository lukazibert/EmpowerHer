import AppBar from "../components/AppBar";
import Post from "../components/Post";
import ProfileIcon from "../components/ProfileIcon";
import SearchBar from "../components/SearchBar";
import "../styles/CommunityView.css";
import { React, useEffect, useState } from "react";

export default function CommunityView(props) {
  const [posts, setPosts] = useState([]);

  //on first render fetch data
  useEffect(() => {
    fetchData();
  }, []);

  //set the responce to the post state
  const fetchData = () => {
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
  };

  //change the like button / like post
  const setLike = (val, id) => {
    const newState = posts.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id == id) {
        return { ...obj, liked: val };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setPosts(newState);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      props.setPage("profile");
    } else {
      props.setPage("support");
    }
    // console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };

  return (
    <div
      className="screen"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
