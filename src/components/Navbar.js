import React from "react";
import classnames from "classnames";

const Navbar = () => {
  return (
    <nav className="top-navigation">
      <div className="top-navigation__actions">
        <div
          className={classnames(
            "top-navigation__filter",
            true && "top-navigation__filter--selected"
          )}
        >
          All
        </div>
        <div
          className={classnames(
            "top-navigation__filter",
            false && "top-navigation__filter--selected"
          )}
        >
          Electricity
        </div>
        <div className="top-navigation__icon">&#43;</div>
      </div>
    </nav>
  );
};

export { Navbar };
