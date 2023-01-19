import React, { useRef } from "react";
import "./../../styles/PaintPage/Canvas.css";

function Canvas() {
  const canvasRefer = useRef<HTMLCanvasElement | null>(null);

  return (
    <>
      <canvas
        className="canvas"
        //   onMouseDown={onMouseDownHandler}
        ref={canvasRefer}
      />
    </>
  );
}

export default Canvas;
