import React from "react";
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/CustomButton";
import "./CollectionItem.scss";
import { connect } from "react-redux";

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${props.item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <div className="name">{props.item.name}</div>
        <div className="price">{props.item.price}</div>
      </div>
      <CustomButton onClick={() => props.addItem(props.item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
