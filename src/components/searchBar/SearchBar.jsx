import React from "react";
import "./search.css";
import { BsSearch } from "react-icons/bs";
export default function SearchBar() {
  return (
    <div className="searchBarDiv">
      <h1 className="userHeader">Hello Shahrukh👋🏻,</h1>
      <div className="searchBar">
        <BsSearch className="searchIcon" />

        <input
          placeholder="Search"
          className="search"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}
