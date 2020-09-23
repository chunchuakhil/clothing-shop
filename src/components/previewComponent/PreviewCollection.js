import React from "react";
import CollectionItem from "./../collectionItem/CollectionItem";
import "./PreviewCollection.scss";

const PreviewCollection = (props) => {
  // console.log("PreviewCollection -> props", props);
  return (
    <div className="collection-preview">
      <div className="title">title</div>
      <div className="preview">
        {props.rest.items
          .filter((item, index) => index < 4)
          .map(({ id, ...restProps }) => (
            <CollectionItem key={id} {...restProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
