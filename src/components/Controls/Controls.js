import React from "react";
import "./Controls.css";
import Builder from "./Builder/Builder";

const products = [
  { title: "Product 1", type: "product1" },
  { title: "Product 2", type: "product2" },
  { title: "Product 3", type: "product3" },
  { title: "Product 4", type: "product4" },
];

const Controls = (props) => {

  return (
    <div className="controls">
      <div className="price">
        <p>Total price: {props.productPrice}</p>
      </div>
      {products.map((item, index) => {
        return (
          <Builder
            title={item.title}
            key={index}
            add={() => props.addProduct(item.type)}
            remove={()=> props.removeProduct(item.type)}
            disabledBtn={props.disabledButton}
            price={props.productPrice}
          />
        );
      })}
      <button type="button" className="order-btn" onClick={props.modal}>Order</button>
    </div>
  );
};

export default Controls;
