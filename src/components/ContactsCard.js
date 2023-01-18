import ProfileIcon from "../components/ProfileIcon";
import "../styles/SupportView.css";
import CommentIcon from "../assests/chat.png";
import Tag from "./Tag";

export default function ContactsCard(props) {
  return (
    <div className="user-card" id={props.contact.id}>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="user-info">
          <ProfileIcon mentor={props.contact.mentor} />
          <div className="user-name">{props.contact.username}</div>
        </div>
        <img src={CommentIcon} alt="" className="" />
      </div>
      <div
        className="d-flex flex-wrap justify-content-start align-items-center"
        style={{ gap: "0px", marginTop: "15px" }}
      >
        {props.contact.tags.length > 0
          ? props.contact.tags.map((text) => {
              return <Tag text={text} />;
            })
          : ""}
      </div>
      <div
        className=""
        style={{
          textOverflow: "ellipsis",
          textAlign: "start",
          paddingLeft: "15px",
          paddingBottom: "10px",
          fontFamily: "Dosis",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "22px",
          lineHeight: "28px",
        }}
      >
        {props.contact.lastMessage}
      </div>
    </div>
  );
}
