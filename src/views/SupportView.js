import SearchBar from "../components/SearchBar";
import ProfileIcon from "../components/ProfileIcon";
import "../styles/SupportView.css";
import CommentIcon from "../assests/chat.png";
import { React, useState, useEffect } from "react";
import ContactsCard from "../components/ContactsCard";

export default function SupportView(props) {
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const [contacts, setContacts] = useState([]);

  const dummmyContacts = [
    {
      id: 0,
      username: "Rachel Kim",
      tags: ["Entrepreneur", "CompSci"],
      mentor: true,
      lastMessage:
        "Hey Olivia, just wanted to check in and see how you're doing. Let's catch up soon!",
    },
    {
      id: 1,
      username: "Sophia Johnson",
      tags: [],
      mentor: false,
      lastMessage: "Hello!",
    },
  ];

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
    isRightSwipe ? props.setPage("community") : props.setPage("support");
    // console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setContacts(dummmyContacts);
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
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // paddingLeft: "10px"
            width: "100%",
            margin: "10px"
          }}
        >
          {contacts.map((contact) => {
            return <ContactsCard contact={contact} />;
          })}
        </div>
      </div>
    </div>
  );
}
