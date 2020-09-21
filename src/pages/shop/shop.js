import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import PreviewCollection from "./../../components/previewComponent/PreviewCollection";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.collections.map((collection) => {
          return (
            <PreviewCollection
              key={collection.id}
              rest={collection}
            ></PreviewCollection>
          );
        })}
      </div>
    );
  }
}
