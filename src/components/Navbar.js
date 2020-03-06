import React from "react";
import classnames from "classnames";

const Navbar = ({
  categories,
  handlePlusClick,
  setActiveCategory,
  activeCategory
}) => {
  return (
    <nav className="top-navigation">
      <div className="top-navigation__actions">
        <div
          className={classnames(
            "top-navigation__filter",
            activeCategory === "ALL" && "top-navigation__filter--selected"
          )}
          onClick={() => setActiveCategory("ALL")}
        >
          All
        </div>
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={classnames(
              "top-navigation__filter",
              category === activeCategory && "top-navigation__filter--selected"
            )}
            onClick={() => setActiveCategory(category)}
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
