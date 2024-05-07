import React from "react";
import "../styles/landing.css";
import GenericDropdown from "./genericDropdown";
import filterDropDownItems from "./util";

function FilterHeader() {
  return (
    <div className="filter_header">
      {filterDropDownItems.map((data) => (
        <GenericDropdown data={data} />
      ))}
    </div>
  );
}

export default FilterHeader;
