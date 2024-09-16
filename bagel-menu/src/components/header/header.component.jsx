import React from "react";
import Menu from "../menu/menu.component";
import BagelList from "../bagel-list/bagel-list.component";
import "./header.style.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>NYC Bagel Shop</h1>
        <p className="tagline">The Best Bagels in Town!</p>
        <Menu />
      </div>
      <BagelList />
    </header>
  );
}

export default Header;
