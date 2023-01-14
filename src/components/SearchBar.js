import React, { useState } from "react";
import "../styles/SearchBar.css";
import SearchButton from "../assests/search-button.svg";
export default function SearchBar() {
  const [searchState, setSearch] = useState("unactive");

  const Unacative = (
    <div className="search-bar">
      <div className="text">Search</div>
      <div className="search-button">
        <img src={SearchButton} alt="" className="img-fluid" />
      </div>
    </div>
  );

  return (
    // <div className="search-bar-active">
    //   <input type="text" className="search-bar" />
    // </div>
    <div className="search-bar">
      <div className="text">Search</div>
      <div className="search-button">
        <img src={SearchButton} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
