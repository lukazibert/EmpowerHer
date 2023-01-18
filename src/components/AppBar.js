import { React, useLayoutEffect, useRef, useState } from "react";
import CommunityIcon from "../assests/board-white.png";
import SupportIcon from "../assests/mentor-white.png";
import ProfileIcon from "../assests/user-icon-white.png";
import BackArrow from "../assests/backArrow.png";
import PlusPurple from "../assests/+-purple.png";
import "../styles/AppBar.css";
export default function AppBar(props) {
  const appBarRef = useRef();

  const [height, setHeight] = useState(0);
  const [swiping, setSwiping] = useState(false);

  useLayoutEffect(() => {
    console.log(props);
    props.setHeight(appBarRef.current.clientHeight);
    setHeight(appBarRef.current.clientHeight);
  }, []);

  const render = () => {
    switch (props.active) {
      case "community":
        return (
          <div className="bg" ref={appBarRef}>
            <div className="icon_profile">
              <img
                src={ProfileIcon}
                className="img-fluid"
                onClick={() => props.setPage("profile")}
              />
            </div>
            <div className="title">
              <div className="">Community</div>
            </div>
            <div
              className="icon_support"
              onClick={() => props.setPage("support")}
            >
              <img src={SupportIcon} className="img-fluid" />
            </div>
          </div>
        );
        break;
      case "support":
        return (
          <div className="bg" ref={appBarRef}>
            <div className="icon_profile">
              <img
                src={ProfileIcon}
                className="img-fluid"
                onClick={() => props.setPage("profile")}
              />
            </div>
            <div
              className="icon_community"
              onClick={() => props.setPage("community")}
            >
              <img src={CommunityIcon} className="img-fluid" />
            </div>
            <div className="title">
              <div className="">Support</div>
            </div>
          </div>
        );
        break;
      case "profile":
        return (
          <div className="bg" ref={appBarRef}>
            <div className="title">
              <div className="">Profile</div>
            </div>
            <div className="icon_community">
              <img
                src={CommunityIcon}
                className="img-fluid"
                onClick={() => props.setPage("community")}
              />
            </div>
            <div className="icon_support">
              <img
                src={SupportIcon}
                className="img-fluid"
                onClick={() => props.setPage("support")}
              />
            </div>
          </div>
        );
        break;
      case "viewprofile":
        return (
          <div className="bg-view" ref={appBarRef}>
            <div
              className="d-flex flex-row justify-content-between align-items-center"
              style={{ width: "100%" }}
            >
              <div className="" style={{ height: "70px", wight: "70px" }} onClick={() => props.setPage("community")}>
                <img
                  src={BackArrow}
                  alt=""
                  className=""
                  style={{
                    height: "70px",
                  }}
                />
              </div>

              <div
                className="d-flex flex-row justify-content-between align-items-center"
                style={
                  swiping
                    ? {
                        height: "72px",
                        width: "330px",
                        borderRadius: "50px 0px 0px 50px",
                        backgroundColor: "#7E6CAD",
                        border: "3px solid #FFFFFF",
                      }
                    : {}
                }
              >
                <div className="swipe-text">
                  {swiping ? "Swipe to add to support" : ""}
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "72px",
                    width: "95px",
                    borderRadius: "50px 0px 0px 50px",
                    backgroundColor: "white",
                  }}
                  onMouseDown={() => setSwiping(true)}
                  onMouseUp={() => setSwiping(false)}
                  onTouchStart={() => setSwiping(true)}
                  onTouchEnd={() => setSwiping(false)}
                  onClick={() => props.addUser()}
                >
                  <img
                    src={PlusPurple}
                    alt=""
                    className=""
                    style={{ height: 40 }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case "message":
        <div className="bg" ref={appBarRef}>
          <div className="d-flex flex-row justify-content-between align-items-center"></div>
        </div>;
        break;
      default:
        break;
    }
  };

  return <div>{render()}</div>;
}
