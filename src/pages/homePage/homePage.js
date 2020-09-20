import React from "react";
import Directory from "../../components/directory/directory";
import "./homePage.scss";

const HomePage = (props) => {
  console.log("HomePage -> props", props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
