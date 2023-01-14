import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchButton from "../assests/search-button.svg";
import Tag from "./Tag";
export default function SearchBar() {
  const [searchState, setSearch] = useState("unactive");

  const tags = [
    "Artificial Intelligence",
    "Investment Banking",
    "Pharmaceuticals",
    "E-commerce",
    "Renewable Energy",
    "Automotive",
    "Robotics",
    "Infrastructure",
    "Higher Education",
    "Precision Agriculture",
  ];

  const Unacative = (
    <div className="search-bar">
      <div className="text">Search</div>
      <div className="search-button">
        <img src={SearchButton} alt="" className="img-fluid" />
      </div>
    </div>
  );

  const initialTags = (
    <div className="d-flex flex-row justify-content-around">
      <Tag text="Mentors" />
      <Tag text="Friends" />
    </div>
  );

  const basicSB = (
    <div className="search-bar">
      <input type="text" className="" />
      <div className="search-button">
        <img src={SearchButton} alt="" className="img-fluid" />
      </div>
    </div>
  );

  const accualSerchBar = (
    <div className="search-bar-bg">
      <div className="search-bar">
        <input type="text" className="" />
        <div className="search-button">
          <img src={SearchButton} alt="" className="img-fluid" />
        </div>
      </div>
      {/* {initialTags} */}
      <div className="d-flex flex-wrap justify-content-around">
        {tags.map((text) => {
          return <Tag text={text} />;
        })}
      </div>
    </div>
  );

  return (
    basicSB
  );
}
