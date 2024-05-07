import React from "react";
import "../styles/landing.css";
import FilterHeader from "./filterHeader";
import JobsCardLandingPage from "./jobsCardsLandingPage";

function Landing() {
  return (
    <div className="landing_page">
      <FilterHeader />
      <JobsCardLandingPage />
    </div>
  );
}

export default Landing;
