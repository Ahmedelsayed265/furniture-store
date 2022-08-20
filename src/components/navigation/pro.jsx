import React from "react";
import "./pro.css";
const PRO = (props) => {
  return (
    <div className="product">
      <div className="pro_img">
        <img src={props.product.url} alt={`img${props.product.id}`} />
      </div>
      <div className="pro_detail">
        <h6>{props.product.name}</h6>
        <p>
          Count: <span>{props.product.count}</span>
        </p>
        <p>{(props.product.price * props.product.count).toFixed(2)}</p>
      </div>
      <div className="del_pro">
        <i
          onClick={() => props.onDelete(props.product)}
          className="fa-solid fa-trash"
        ></i>
      </div>
    </div>
  );
};

export default PRO;
