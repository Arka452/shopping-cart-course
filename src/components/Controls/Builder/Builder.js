import React from "react";
import "./Builder.css";

const Builder = (props) => {
  return (
    <div className="builder">
      <div>{props.title}</div>
      <button type="button" className="btn" onClick={props.add}>Add</button>
      <button type="button" className={props.price === 0 ? 'btn-disabled' : 'btn'} onClick={props.remove} disabled={props.price === 0 ? props.disabledBtn : false}>Remove</button>
    </div>
  );
};

export default Builder;
