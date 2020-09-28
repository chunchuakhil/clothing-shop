import React from "react";
import "./CustomButton.scss";

const CustomButton = (props) => {
  return (
    <button
      //   className={`${props.isGoogleSignIn ? "google_button" : ""}custom_button`}
      className={"custom_button"}
      //   className={"google_button"}
      {...props}
    >
      {/* {props.children} */}
    </button>
  );
};

export default CustomButton;
