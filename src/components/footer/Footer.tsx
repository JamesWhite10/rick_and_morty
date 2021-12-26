import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "10vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        style={{ textDecoration: "none", color: "white", textAlign: "center" }}
        href="https://github.com/JamesWhite10/rick_and_morty"
      >
        <h5>The Rick and Morty GitHub</h5>
      </a>
      <span className="text-white">, by Maxim Migalin &copy; {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
