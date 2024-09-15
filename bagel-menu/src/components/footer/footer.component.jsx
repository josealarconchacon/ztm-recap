import React from "react";
import "./footer.style.scss";

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour < closeHours;

  return (
    <footer className="footer">
      <p>
        {new Date().toLocaleString()}. We are {isOpen ? "open" : "closed"}.
      </p>
      <p>&copy; 2023 NYC Bagel Shop</p>
    </footer>
  );
}

export default Footer;
