import React from "react";
import CollectionItem from "./../collectionItem/CollectionItem";
import "./PreviewCollection.scss";

const PreviewCollection = (props) => {
  return (
    <div className="collection-preview">
      <div className="title">{props.rest.title}</div>
      <div className="preview">
        {props.rest.items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
