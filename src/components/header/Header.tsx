import React from "react";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  brand: string;
  type: string;
};

const Header: React.FC<HeaderPropsType> = ({ brand, type }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-5">
      <NavLink to={"/"}>
        <h1 className="mx-3 berlin text-white">
          {brand} <span className="text-danger">{type}</span>
        </h1>
      </NavLink>
      <img
        style={{ width: "12%", height: "auto" }}
        src="https://www.pngplay.com/wp-content/uploads/13/Rick-And-Monty-Free-PNG.png"
        alt="avatar"
      />
    </div>
  );
};

export default Header;
