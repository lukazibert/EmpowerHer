import { React } from "react";
import WorkIcon from "../assests/portfolio.png";
import CompleatedGoal from "../assests/Ellipse 5.png";
import UncompleatedGoal from "../assests/Ellipse 10.png";

export default function GoalGraph(props) {
  const style = {
    height: "auto",
    width: "100%",
    background: "#D2C0FF",
    borderRadius: "50px",
    padding: "3px"
  };

  return (
    <div className="" style={props.selected ? style : ""}>
      <div className="d-flex flex-row align-items-center">
        <div
          className="d-flex justify-content-center aligne-items-center m-1"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50px",
            backgroundColor: "white",
          }}
        >
          <img
            src={WorkIcon}
            alt=""
            className=""
            style={{
              padding: "7px",
            }}
          />
        </div>
        <div
          className=""
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#7E6CAD",
            margin: "7px",
            posiotion: "absolute",
            zIndex: "1",
          }}
        >
          <div
            className="d-flex flex-row allign-items-center justify-content-between"
            style={{
              zIndex: "2",
              position: "relative",
              top: "-8px",
            }}
          >
            {props.goals.map((goal) => {
              return goal.compleated ? (
                <img src={CompleatedGoal} style={{ height: "20px" }} />
              ) : (
                <img src={UncompleatedGoal} style={{ height: "20px" }} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
