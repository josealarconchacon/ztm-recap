import React from "react";
import Menu from "../menu/menu.component";
import BagelList from "../bagel-list/bagel-list.component";
import "./header.style.scss";

function Header() {
  return (
    <div className="header">
      <h1>NYC Bagel Shop</h1>
      <Menu />
      <BagelList />
    </div>
  );
}

export default Header;
