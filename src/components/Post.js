import React from "react";
import ProfileIcon from "./ProfileIcon";
import "../styles/Post.css";
import LikeIconUnactive from "../assests/heart-white.png";
import LikeIconActive from "../assests/heart.png";
import CommentIcon from "../assests/chat.png";
import Tag from "../components/Tag";

import ShareIcon from "../assests/share-white.png";

export default function Post(props) {
  return (
    <div className="post" id={props.id}>
      <div className="user-info" onClick={() => props.viewProfile(props.id)}>
        <ProfileIcon mentor={props.mentor} />
        <div className="user-name">{props.username}</div>
      </div>
      <div className="d-flex flex-wrap justify-content-start align-items-center pt-2" style={{columnGap: "10px"}}>
        {props.tags.map((text) => {
          return <Tag text={text} />;
        })}
      </div>
      <div className="content">{props.content}</div>
      <div className="button-group">
        <div className="like-comment">
          {props.liked ? (
            <img
              src={LikeIconActive}
              alt=""
              className=""
              onClick={() => props.setLike(!props.liked, props.id)}
            />
          ) : (
            <img
              src={LikeIconUnactive}
              alt=""
              className=""
              onClick={() => props.setLike(!props.liked, props.id)}
            />
          )}
          <img src={CommentIcon} alt="" className="" />
        </div>
        <img src={ShareIcon} alt="" className="" />
      </div>
    </div>
  );
}
