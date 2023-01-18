import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchButton from "../assests/search-button.svg";
import Tag from "./Tag";
export default function SearchBar() {
  const [searchState, setSearch] = useState("unactive");
  const [activeTags, setActiveTags] = useState([
    "mentors",
    "friends",
  ])


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
    "tech"
  ];



  const Unacative = (
    <div className="search-bar" onClick={() => setSearch("active")}>
      <div className="text">Search</div>
      <div className="search-button">
        <img src={SearchButton} alt="" className="img-fluid" />
      </div>
    </div>
  );

  const InitialTags = (
    <div className="d-flex flex-row justify-content-around">
      <Tag text="Mentors" />
      <Tag text="Friends" />
    </div>
  );

  const BasicSB = (
    <div className="search-bar">
      <input type="text" className="" />
      <div className="search-button">
        <img src={SearchButton} alt="" className="img-fluid" />
      </div>
    </div>
  );

  const Active = (
    <div className="search-bar-bg">
      <div className="search-bar">
        <input type="" className="" placeholder="Search" />
        <div className="search-button">
          <img src={SearchButton} alt="" className="img-fluid" />
        </div>
      </div>
      {/* {initialTags} */}
      <div className="d-flex flex-wrap justify-content-around">
        {activeTags.map((text) => {
          return <Tag text={text} />;
        })}
      </div>
    </div>
  );

  const renderSearchBar = () => {
    {switch (searchState) {
      case "unactive":
        return Unacative;
        break;
        case "active":
        return Active;
        break;
      default:
        break;
    }}
  }

  return (
    renderSearchBar()
  );
}
