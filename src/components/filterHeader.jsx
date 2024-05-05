import React from "react";
import "../styles/landing.css";
import { useSelector } from "react-redux";

function FilterHeader() {
  const { jobsList } = useSelector((state) => state.jobSearch);

  return <div className="filter_header">Job filter header</div>;
}

export default FilterHeader;
