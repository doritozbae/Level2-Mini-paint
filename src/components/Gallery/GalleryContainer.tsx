import React, { useState } from "react";
import "./../../styles/GalleryPage/GalleryContainer.css";
import GalleryItem from "./GalleryItem";

function GalleryContainer() {
  const [search, setSearch] = useState("");

  return (
    <div className="gallery-container">
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <GalleryItem />
      <GalleryItem />
      <GalleryItem />
    </div>
  );
}

export default GalleryContainer;
