import React from "react";

import "./CustomFormInput.scss";

const CustomFormInput = (props) => {
  //   console.log("CustomFormInput -> props", props);
  return (
    <div className="group">
      {props.label ? <label>{props.label}</label> : null}
      <input className="form-input" onChange={props.onChange} {...props} />
    </div>
  );
};

export default CustomFormInput;
