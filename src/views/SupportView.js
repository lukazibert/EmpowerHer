import SearchBar from "../components/SearchBar";
import ProfileIcon from "../components/ProfileIcon";
import "../styles/SupportView.css";
import CommentIcon from "../assests/chat.png";
import { React, useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function SupportView(props) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 10;

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

  return (
    <div
      className="screen"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="view">
        <SearchBar />
        <div className="user-card">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="user-info">
              <ProfileIcon mentor={true} />
              <div className="user-name">Rachel Kim</div>
            </div>
            <img src={CommentIcon} alt="" className="" />
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center"></div>
        </div>
      </div>
    </div>
  );
}
