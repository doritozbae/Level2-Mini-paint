import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {fa-faCircle} from "@fortawesome/free-solid-svg-icons";
import "./../../styles/PaintPage/ToolPanel.css";
import {
  faCircle,
  faSquare,
  faWindowMinimize,
  faCircleDot,
} from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import InputColor from "react-input-color";

function ToolPanel() {
  const [color, setColor] = React.useState({});

  return (
    <>
      <div className="panel-container">
        <div className="tool-btns">
          <div className="line-btn btn">
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
          <div className="sqr-btn btn">
            <FontAwesomeIcon icon={faSquare} />
          </div>
          <div className="circle-btn btn">
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <div className="pen-btn btn ">
            <FontAwesomeIcon icon={faPencil} />
          </div>
          <div className="width-btn btn ">
            <FontAwesomeIcon icon={faCircleDot} />
          </div>
          <div>
            <InputColor
              initialValue="#5e72e4"
              onChange={setColor}
              placement="right"
            />
            {/* <div
            style={{
              width: 50,
              height: 50,
              marginTop: 20,
              backgroundColor: color.rgba,
            }}
          /> */}
          </div>
        </div>

        <div className="save-btn">save</div>
      </div>
    </>
  );
}

export default ToolPanel;
