import React from "react";
import "./pro.css";
const PRO = (props) => {
  const { url2, name, id, count, price } = props.product;
  return (
    <div className="product">
      <div className="pro_img">
        <img src={url2} alt={`img${id}`} />
      </div>
      <div className="pro_detail">
        <h6>{name}</h6>
        <p>
          Count: <span>{count}</span>
        </p>
        <p>{(price * count).toFixed(2)}</p>
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
