import React from "react";
import "./CollectionItem.scss";

const CollectionItem = (props) => {
  // console.log("CollectionItem -> props", props);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      ></div>
      <div className="name">{props.name}</div>
      <div className="price">{props.price}</div>
    </div>
  );
};

export default CollectionItem;
