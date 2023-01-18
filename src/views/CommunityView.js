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

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEndX(null); // otherwise the swipe is fired even with usual touch events
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndY(null); // otherwise the swipe is fired even with usual touch events
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY - touchEndY;
    if (
      !touchStartX ||
      !touchEndX ||
      Math.abs(distanceX) < Math.abs(distanceY) 

    )
      return;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
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
              viewProfile={props.viewProfile}
            />
          );
        })}
      </div>
    </div>
  );
}
