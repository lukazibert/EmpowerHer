import React from "react";
import introImg from "../assests/DALL·E 2022-12-20 12.01.59 - empowerment of women thought technology using simple shapes.png";


export default function LoadingView() {
    const background_style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "400px 20px 0px",
        gap: "100px",
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background: "#CBA6FC",
      };
    
      const text_style = {
        fontFamily: "Dosis",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "4rem",
        color: "white",
      };

      return(
        <div className="" style={background_style}>
        <div className="" style={text_style}>
          EmpowerHer
        </div>
        <div className="">
          <img src={introImg} class="img-fluid" alt="" />
        </div>
      </div>
      );
} 
    
