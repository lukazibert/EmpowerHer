import SearchBar from "../components/SearchBar";
import ProfileIcon from "../components/ProfileIcon";
import "../styles/SupportView.css";
import CommentIcon from "../assests/chat.png";
import { React, useState, useEffect } from "react";
import ContactsCard from "../components/ContactsCard";

export default function SupportView(props) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
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
            gap: "15px",
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
