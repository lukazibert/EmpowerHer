import React from "react";
import SupportIcon from "../assests/mentor-white.png";
import ProfileIcon from "../assests/user-icon-white.png";
import CommunityIcon from "../assests/board-white.png";
import "../styles/AppBar.css";
export default function AppBar(props) {
  switch (props.active) {
    case "community":
      return (
        <div className="bg">
          <div className="icon_profile">
            <img src={ProfileIcon} className="img-fluid" />
          </div>
          <div className="title">
            <div className="text">Community</div>
          </div>
          <div className="icon_support">
            <img src={SupportIcon} className="img-fluid" />
          </div>
        </div>
      );
      break;
    case "support":
      return (
        <div className="bg">
          <div className="icon_profile">
            <img src={ProfileIcon} className="img-fluid" />
          </div>
          <div className="icon_community">
            <img src={CommunityIcon} className="img-fluid" />
          </div>
          <div className="title">
            <div className="text">Support</div>
          </div>
        </div>
      );
      break;
    case "profile":
      return (
        <div className="bg">
            <div className="title">
            <div className="text">Profile</div>
          </div>
          <div className="icon_community">
            <img src={CommunityIcon} className="img-fluid" />
          </div>
          <div className="icon_support">
            <img src={SupportIcon} className="img-fluid" />
          </div>
        </div>
      );
      break;
    default:
      break;
  }
}
