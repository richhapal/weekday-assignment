import React, { useEffect, useState } from "react";
import "../styles/landing.css";
import { useDispatch, useSelector } from "react-redux";
import JobCards from "./jobCard";
import { getFilterJobList } from "./util";
import { updateJobList } from "../redux/jobSearchSlice";

function JobsCardLandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [jobPreviewList, setJobPreviewList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const { jobsList, jobFilters } = useSelector((state) => state.jobSearch);
  const dispatch = useDispatch();

  const handleUpdateMainJobList = (list = []) => {
    dispatch(updateJobList({ value: [...jobsList, ...list] }));
  };

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
      const filterList = getFilterJobList(data?.jdList, jobFilters);
      console.log("fiterList", filterList);
      setJobPreviewList((prev) => [...prev, ...filterList]);
      handleUpdateMainJobList(data?.jdList);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const filterList = getFilterJobList(jobsList, jobFilters);
    setJobPreviewList(filterList);
  }, [jobFilters]);

  useEffect(() => {
    if (jobPreviewList?.length > 0 && jobPreviewList?.length <= 3) {
      fetchData();
    }
  }, [jobPreviewList]);

  useEffect(() => {
    // fetching during initial rendering
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      console.log(
        "scrolltop",
        scrollTop,
        "cleintHieght",
        clientHeight,
        "scrolheig",
        scrollHeight,
        "scrol+cleitn",
        scrollTop + clientHeight
      );
      if (scrollTop + clientHeight >= scrollHeight - 40) {
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
      {jobPreviewList?.length > 0 ? (
        <div>
          <div className="jobs_cards_landing_page">
            {jobPreviewList.map((data) => (
              <JobCards data={data} />
            ))}
          </div>
          {isLoading && <div className="loading">Loading...</div>}
        </div>
      ) : (
        <div className="jobs_cards_landing_page">No Job Found</div>
      )}
    </div>
  );
}

export default JobsCardLandingPage;
