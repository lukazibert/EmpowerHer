import AppBar from "../components/AppBar";
import Post from "../components/Post";
import ProfileIcon from "../components/ProfileIcon";
import SearchBar from "../components/SearchBar";
import "../styles/CommunityView.css";
import AddIcon from "../assests/+.png";
import { React, useEffect, useState } from "react";
import AddPost from "../components/AddPost";

export default function CommunityView(props) {
  const [posts, setPosts] = useState([]);

  const addPost = () => {};

  //on first render fetch data
  useEffect(() => {
    fetchData();
  }, []);

  //set the responce to the post state
  const fetchData = () => {
    const res = [
      {
        id: 1,
        username: "Jane Doe",
        mentor: true,
        content:
          "Just finished mentoring a group of aspiring software engineers. So proud of their progress! #womenintech #mentorship",
        liked: false,
        tags: ["womenintech", "mentorship"],
      },
      {
        id: 2,
        username: "Samantha Smith",
        mentor: false,
        content:
          "Excited to share my latest project on sustainable agriculture at the upcoming conference. #climatechange #agriculture",
        liked: false,
        tags: ["climatechange", "agriculture"],
      },
      {
        id: 3,
        username: "Emily Johnson",
        mentor: false,
        content:
          "Feeling empowered at the Women in Business conference. So many strong, successful women in one room. #womeninbusiness #leadership",
        liked: false,
        tags: ["womeninbusiness", "leadership"],
      },
      {
        id: 4,
        username: "Ashley Williams",
        mentor: true,
        content:
          "Mentoring a group of young girls interested in STEM. The future is bright for these girls! #STEM #mentorship",
        liked: false,
        tags: ["STEM", "mentorship"],
      },
      {
        id: 5,
        username: "Sarah Miller",
        mentor: false,
        content:
          "Proud to be a part of the team working to increase diversity and inclusion in the workplace. #diversity #inclusion",
        liked: false,
        tags: ["diversity", "inclusion"],
      },
      {
        id: 6,
        username: "Michael Davis",
        mentor: false,
        content:
          "Excited to be starting a new chapter in my career as a doctor. #medicine #womeninmedicine",
        liked: false,
        tags: ["medicine", "womeninmedicine"],
      },
      {
        id: 7,
        username: "Jessica Moore",
        mentor: true,
        content:
          "Just finished a successful mentorship with a young woman interested in finance. Excited to see where her career takes her! #finance #mentorship",
        liked: false,
        tags: ["finance", "mentorship"],
      },
      {
        id: 8,
        username: "Matthew Taylor",
        mentor: false,
        content:
          "Proud to be a part of a company working towards gender equality in the workplace. #genderequality #womeninworkforce",
        liked: false,
        tags: ["genderequality", "womeninworkforce"],
      },
      {
        id: 9,
        username: "Madison Anderson",
        mentor: false,
        content:
          "Excited to share my research on renewable energy at the upcoming conference. #renewableenergy #womeninSTEM",
        liked: false,
        tags: ["renewableenergy", "womeninSTEM"],
      },
      {
        id: 10,
        username: "Emily Thomas",
        mentor: true,
        content:
          "Just finished mentoring a group of young women interested in careers in law. Excited to see where their careers take them! #law #mentorship",
        liked: false,
        tags: ["law", "mentorship"],
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
    if (!touchStartX || !touchEndX || Math.abs(distanceX) < Math.abs(distanceY))
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
              tags={post.tags}
            />
          );
        })}
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "80px",
            height: "80px",
            borderRadius: "50px",
            background: "#7E6CAD",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img src={AddIcon} alt="" className="" onClick={() => {}} />
        </div>
      </div>
      {/* <div
        className=""
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          background: "rgba(238, 238, 238, 0.8)",
          top: 0,
          left: 0,
          zIndex: "100",
        }}
      >
        <div className="d-flex justify-content-center align-items-center" style={{
          height: "100vh",
          width: "100vw",
          padding: "10px"
        }}>
          <AddPost />
        </div>
      </div> */}
    </div>
  );
}
