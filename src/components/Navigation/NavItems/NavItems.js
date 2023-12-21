import React from "react";
import NavItem from "../NavItem/NavItem";
import "./NavItems.css";

const NavItems = () => {
  return (
    <div>
      <ul className="nav-items">
        <NavItem link="/">Shopping</NavItem>
        <NavItem link="/">Checkout</NavItem>
      </ul>
    </div>
  );
};

export default NavItems;
