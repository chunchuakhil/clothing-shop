import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.scss";
const MenuItem = (props) => {
  // console.log("MenuItem -> props", props);
  return (
    <div
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
      className="menu-item"
    >
      <button
        onClick={(e) => {
          props.history.push("/hats");
        }}
      >
        Button
      </button>
      <div className="content">
        <h1 className="title"> {props.title}</h1>
        <span className="subtitle">shop here</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
