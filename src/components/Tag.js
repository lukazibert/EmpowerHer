import React from "react";
import "../styles/Tag.css";

export default function Tag(props) {
    return(
        <div className="tag">
            <div className="text-tag">{props.text}</div>
        </div>
    );
}