import SearchBar from "../components/SearchBar";
import ProfileIcon from "../components/ProfileIcon";
import "../styles/SupportView.css";
import CommentIcon from "../assests/chat.png";
import { React, useState, useEffect } from "react";
import ContactsCard from "../components/ContactsCard";
import AppBar from "../components/AppBar";


export default function MessageView(props) {
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);
    const [contacts, setContacts] = useState([]);
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
        isLeftSwipe ?? props.setPage("support");
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
                    <div className="user-card">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="user-info">
                                <div className="user-name">Rachel Kim</div>
                            </div>
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
                                fontSize: "15px",
                                lineHeight: "22px",
                            }}
                        >
                            Hey Olivia, just wanted to check in and see how you're doing. Let's catch up soon!
                        </div>
                    </div>
                    <div className="user-card">
                        <div className="">
                            <div className="user-info">
                                <div className="user-name">Me</div>
                            </div>
                        </div>
                        <div
                            className=""
                            style={{
                                textOverflow: "ellipsis",
                                textAlign: "start",
                                paddingRight: "30px",
                                paddingBottom: "10px",
                                fontFamily: "Dosis",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "22px",
                            }}
                        >
                            Hey Rachel, I'm doing well! I'm just really busy with school and work. I'll let you know when I'm free!
                        </div>
                    </div>
                </div>
                <div class="send_message">
                    <input type="text" placeholder="Type a message"/>
                </div>
            </div>
        </div>
    );
}   