import SearchBar from "../components/SearchBar";
import React from "react";
import ProfileIcon from "../components/ProfileIcon";
import "../styles/SupportView.css";
import CommentIcon from "../assests/chat.png";


export default function SupportView(props) {

  return (
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
        <div className="d-flex flex-row justify-content-start align-items-center">
            
        </div>
      </div>
    </div>
  );
}
