import React from "react";
import "./featured.css";
const FeaturedComponent = (props) => {
  return (
    <React.Fragment>
      <div className="col-4 p-0 pro_card">
        <div className="inner_card">
          <div className="img_wraper">
            <img src="" alt="" />
          </div>
          <div className="img_caption">
            <p>{props.product.name}</p>
          </div>
          <div className="add_cart">
            <span>{props.product.price}</span>
            <div className="link">
              <ion-icon name="bag-outline"></ion-icon>ADD TO CART
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedComponent;
