import AppBar from "../components/AppBar";
import Tag from "../components/Tag";
import userIcon from "../assests/user-icon-white.png";
import "../styles/ProfileView.css";
import CheckIcon from "../assests/check.png";
import AddIcon from "../assests/+.png";
import GoalGraph from "../components/GoalGraph";
import { React, useState } from "react";

export default function ProfileView(props) {
  //code need to make it posible to swipe between views
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
    isRightSwipe ? props.setPage("profile") : props.setPage("community");
    // console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };

  const userObj = {
    username: "Rachel Kim",
    tags: ["Entrepreneur", "CompSci"],
    myStory:
      "I had always been passionate about computer science, and after years of working in the industry, I decided it was time to start my own business. I put together a business plan, secured funding, and recruited a team of skilled developers. As the CEO of my own company, I faced many challenges and long hours, but I was determined to succeed. I worked tirelessly to build a strong foundation for the business and to create innovative software solutions for my clients.",
    goalLines: "",
    goals: [
      {
        id: 0,
        title: "Establish a client base",
        descrition: "",
        compleated: true,
      },
      {
        id: 1,
        title: "Built a team",
        descrition: "",
        compleated: true,
      },
      {
        id: 2,
        title: "Deliver high-quality work",
        descrition: "",
        compleated: false,
      },
      {
        id: 3,
        title: "Expand service offerings",
        descrition: "",
        compleated: false,
      },
      {
        id: 4,
        title: "Scalability",
        descrition: "",
        compleated: false,
      },
    ],
    mentor: true,
  };

  const [showCompleated, setShowCompleated] = useState(false);

  let lastCompleatedIdx;
  for (let index = 0; index < userObj.goals.length; index++) {
    if (userObj.goals[index].compleated == false) {
      console.log(index);
      lastCompleatedIdx = index - 1;
      break;
    }
  }

  return (
    <div
      className="view"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="circle-img">
        <img
          src={userIcon}
          alt=""
          className="img-fluid"
          style={{ marginTop: "100px" }}
        />
      </div>
      <div className="name">
        <div className="username">{userObj.username}</div>
        <div className="">
          {userObj.mentor ? (
            <img src={CheckIcon} className="check img-fluid" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around" style={{width: "100%"}}>
        {userObj.tags.map((tag) => {
          return <Tag text={tag} />;
        })}
      </div>
      <div className="my-story">
        <div className="my-story-title">My Story</div>
        {userObj.myStory}
      </div>
      <div className="my-goals">
        <div className="top-row">
          <div className="my-goals-title">My goals</div>
          <div className="add-button">
            <img src={AddIcon} alt="" className="" />
          </div>
        </div>
        <div
          className="goal-graph"
          style={{
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <GoalGraph selected="true" goals={userObj.goals} />
        </div>
        <div className="goals">
          <div className="compleated">
            {/* completed goal are displaye in column */}
            {showCompleated ? (
              <div
                className="d-flex flex-column"
                style={{
                  gap: "20px",
                  paddingTop: "20px",
                }}
              >
                {userObj.goals.map((goal) => {
                  if (goal.compleated) {
                    return (
                      <div
                        id={goal.id}
                        className=""
                        style={{
                          backgroundColor: "#D9D9D9",
                          borderRadius: "20px",
                          height: "auto",
                          width: "100%",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                        onClick={() => setShowCompleated(false)}
                      >
                        <div
                          className=""
                          style={{
                            padding: "15px",
                            fontFamily: "Dosis",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "30px",
                            lineHeight: "38px",
                            color: "black",
                            textAlign: "start",
                          }}
                        >
                          {goal.title}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              // goals are displayed stacked
              <div
                className=""
                style={{
                  paddingTop: "20px",
                  maxHeight: "90px",
                  paddingBottom: "20px",
                }}
                onClick={() => setShowCompleated(true)}
              >
                <div
                  className=""
                  style={{
                    position: "relative",
                    margineTop: "20px",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "20px",
                    height: "70px",
                    width: "100%",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    zIndex: "3",
                  }}
                >
                  <div
                    className=""
                    style={{
                      padding: "15px",
                      fontFamily: "Dosis",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "30px",
                      lineHeight: "38px",
                      color: "black",
                      textAlign: "start",
                    }}
                  >
                    {userObj.goals[lastCompleatedIdx].title}
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    position: "relative",
                    padding: "15px",

                    left: "5px",
                    bottom: "75px",
                    backgroundColor: "#CBCBCB",
                    borderRadius: "20px",
                    height: "70px",
                    width: "100%",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    zIndex: "2",
                  }}
                ></div>
                <div
                  className=""
                  style={{
                    position: "relative",
                    padding: "15px",

                    left: "10px",
                    bottom: "150px",
                    backgroundColor: "#B3B3B3",
                    borderRadius: "20px",
                    height: "70px",
                    width: "100%",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    zIndex: "1",
                  }}
                ></div>
              </div>
            )}
          </div>
          <div
            className="d-flex flex-column"
            style={{
              gap: "20px",
              paddingTop: "20px",
            }}
          >
            {userObj.goals.map((goal) => {
              if (!goal.compleated) {
                return (
                  <div
                    id={goal.id}
                    className=""
                    style={{
                      backgroundColor: "#C2ABFF",
                      borderRadius: "20px",
                      height: "auto",
                      width: "100%",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        padding: "15px",
                        fontFamily: "Dosis",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "30px",
                        lineHeight: "38px",
                        color: "white",
                        textAlign: "start",
                      }}
                    >
                      {goal.title}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
