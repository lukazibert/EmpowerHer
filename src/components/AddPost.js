import { React, useState } from "react";
import ProfileIcon from "./ProfileIcon";
import "../styles/Post.css";
import AddImage from "../assests/add-image-3.png";
import LikeIconUnactive from "../assests/heart-white.png";
import LikeIconActive from "../assests/heart.png";
import CommentIcon from "../assests/chat.png";
import Tag from "./Tag";

import ShareIcon from "../assests/share-white.png";

export default function AddPost(props) {
  const [data, setData] = useState({
    tags: [],
    content: "",
  });

  return (
    <div className="post">
      <div className="user-info">
        <ProfileIcon mentor={false} />
        <div className="user-name">Maria Rodriguez</div>
      </div>
      <div
        className="d-flex flex-wrap justify-content-start align-items-center pt-2"
        style={{ columnGap: "10px" }}
      ></div>
      <div className="content"></div>
      <div className="button-group">
        <div
          className="d-flex flex-row justify-content-between"
          style={{ width: "100%" }}
        >
          <img src={AddImage} alt="" className="" />
          <div className="tag">
            <div className="text">Send</div>
          </div>
        </div>
      </div>
    </div>
  );
}
