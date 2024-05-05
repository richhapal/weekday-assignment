import React, { useCallback, useEffect, useState } from "react";
import "../styles/landing.css";
import { useSelector } from "react-redux";
import JobCards from "./jobCard";

function JobsCardLandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobList, setJobList] = useState([]);
  const { jobsList } = useSelector((state) => state.jobSearch);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ limit: 10, offset: 0 }),
      }
    );
    const data = await response.json();
    if (data) {
      setJobList(data.jdList);
      setIsLoading(false);
    }
    console.log("data", data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="jobs_cards_landing_page">
      {jobList.map((data) => (
        <JobCards data={data} />
      ))}
    </div>
  );
}

export default JobsCardLandingPage;
