import React, { useEffect, useState } from "react";
import "../styles/landing.css";
import { useSelector } from "react-redux";
import JobCards from "./jobCard";

function JobsCardLandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const { jobsList } = useSelector((state) => state.jobSearch);

  const fetchData = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ limit: 10, offset: offSet }),
      }
    );
    const data = await response.json();
    setOffSet((prev) => prev + 1);
    if (data) {
      setJobList((prev) => [...prev, ...data.jdList]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetching during initial rendering
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div>
      <div className="jobs_cards_landing_page">
        {jobList.map((data) => (
          <JobCards data={data} />
        ))}
      </div>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
}

export default JobsCardLandingPage;
