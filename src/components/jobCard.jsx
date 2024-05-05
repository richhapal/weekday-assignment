import React from "react";
import "../styles/landing.css";

function JobCards({ data }) {
  const AboutCompany = data.jobDetailsFromCompany;
  return (
    <div className="card_container" id={data.jdUid}>
      <div className="card_header">
        <img src={data.logoUrl} className="company_logo" alt="logo" />
        <div>
          <div className="info_container">
            <h3 className="company_name">{data.companyName}</h3>
            <h2>{data.jobRole}</h2>
          </div>
          <div className="location">
            <span>{data.location}</span>
          </div>
        </div>
      </div>
      {data.minJdSalary && data.maxJdSalary && (
        <div className="salary_estimate">
          Estimated Salary: {data.salaryCurrencyCode} {data.minJdSalary} -{" "}
          {data.maxJdSalary}{" "}
        </div>
      )}
      <div className="about_company">
        <h3>About Company :</h3>
        <p>
          {AboutCompany.length > 250
            ? `${AboutCompany.slice(0, 250)}...`
            : `${AboutCompany}`}
        </p>
      </div>
      {data.minExp && (
        <div className="experience">
          <h3>Minimum Experience</h3>
          <p>{data.minExp} years</p>
        </div>
      )}
      <a href={data.jdLink} target="_blank">
        <div className="apply_button">
          <span>Easy Apply</span>
        </div>
      </a>
    </div>
  );
}

export default JobCards;
