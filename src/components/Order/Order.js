import React from "react";
import "./Order.css";
import Button from "../UI/Button/Button";
import Wrapper from "../../hoc/Wrapper";

const Order = (props) => {
  const summary = Object.keys(props.products).map((item, index) => {
    return (
      <li key={index}>
        {item}: {props.products[item]}
      </li>
    );
  });

  return (
    <Wrapper>
      <h3>Order</h3>
      {summary}
      <h4 style={{
        marginTop: '10px',
        marginBottom: '10px'
      }} >Total Price:{props.finallPrice}</h4>
      <h3>Continue ?</h3>
      <Button btnType='success' click={props.continue}>Yes</Button>
      <Button btnType='danger' click={props.cancell}>No</Button>
    </Wrapper>
  );
};

export default Order;
