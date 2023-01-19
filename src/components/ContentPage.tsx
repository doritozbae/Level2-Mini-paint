import React, { useState } from "react";
import "./../styles/ContentPage.css";
import GalleryContainer from "./Gallery/GalleryContainer";
import PaintContainer from "./Paint/PaintContainer";

function Content() {
  const [paintPage, setPaintPage] = useState(false);

  const handleClick = () => {
    if (paintPage === false) {
      setPaintPage(true);
    } else setPaintPage(false);
  };

  return (
    <>
      <div className="header">
        <p onClick={handleClick}>{paintPage ? "Gallery" : "Create"}</p>
        <h1>app name</h1>
        <p>logout</p>
      </div>
      {paintPage ? <PaintContainer /> : <GalleryContainer />}
    </>
  );
}

export default Content;
