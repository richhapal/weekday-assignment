import React from "react";
import "../styles/landing.css";
import { useSelector } from "react-redux";
import FilterHeader from "./filterHeader";
import JobsCardLandingPage from "./jobsCardsLandingPage";

function Landing() {
  const { jobFilters } = useSelector((state) => state.jobSearch);

  return (
    <div className="landing_page">
      <FilterHeader />
      <JobsCardLandingPage />
    </div>
  );
}

export default Landing;
