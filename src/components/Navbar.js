import React from "react";
import classnames from "classnames";

const Navbar = ({ categories, handlePlusClick }) => {
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
        {categories.map(category => (
          <div
            className={classnames(
              "top-navigation__filter",
              false && "top-navigation__filter--selected"
            )}
          >
            {category}
          </div>
        ))}
        <div className="top-navigation__icon" onClick={handlePlusClick}>
          &#43;
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
