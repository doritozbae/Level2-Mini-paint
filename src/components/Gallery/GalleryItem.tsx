import React from "react";
import "./../../styles/GalleryPage/GalleryItem.css";

function GalleryItem() {
  return (
    <div className="gallery-item">
      <p className="gallery-item__name">author_name</p>
      <div className="gallery-item__pic"></div>
      <p className="gallery-item__date">15/January/2023</p>
    </div>
  );
}

export default GalleryItem;
