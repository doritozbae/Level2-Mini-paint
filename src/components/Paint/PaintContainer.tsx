import React from "react";
import "./../../styles/PaintPage/PaintContainer.css";
import Canvas from "./Canvas";
import ToolPanel from "./ToolPanel";

function PaintContainer() {
  return (
    <>
      <div className="paint-container">
        <ToolPanel />
        <Canvas />
      </div>
    </>
  );
}

export default PaintContainer;
