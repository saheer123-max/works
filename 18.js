import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#222", color: "#fff", padding: "20px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Shoe Store. All Rights Reserved.</p>
      <p>Follow us on: 
        <a href="#" style={{ color: "#f4a261", margin: "0 10px" }}>Facebook</a> | 
        <a href="#" style={{ color: "#f4a261", margin: "0 10px" }}>Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
