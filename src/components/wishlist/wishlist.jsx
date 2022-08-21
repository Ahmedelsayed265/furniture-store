import React from "react";
import { Link } from "react-router-dom";
import "./wishlist.css";
const Wish = (props) => {
  return (
    <React.Fragment>
      <div className="go_back">
        <Link to="/home">Home</Link> / Wishlist
      </div>
      <section className="wish_list">
        <h3>WISH LIST</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">unit price</th>
              <th scope="col">stock status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((p) => (
              <tr key={p.id}>
                <th scope="row">
                  <img src={p.url} alt={`img${p.id}`} />
                </th>
                <td className="name">{p.name}</td>
                <td>{p.price}</td>
                <td>IN STOCK</td>
                <td>
                  <i
                    onClick={() => props.onCartChange(p)}
                    className="fa-solid fa-cart-plus"
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => props.onXChange(p)}
                    className="fa-solid fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {props.products.length === 0 ? (
          <div className="empty">
            <p>No products added to the wishlist</p>
          </div>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};

export default Wish;
