import React, { useEffect, useRef, useState } from "react";
import "../styles/landing.css";
import { useDispatch, useSelector } from "react-redux";
import { updateJobFilters } from "../redux/jobSearchSlice";

function GenericDropdown({ data }) {
  const { name, key, options } = data;
  const [open, setOpen] = useState(false);
  const { jobFilters } = useSelector((state) => state.jobSearch);
  const dispatch = useDispatch();

  const handleUpdateFilter = (value) => {
    dispatch(
      updateJobFilters({
        value: {
          ...jobFilters,
          [key]: jobFilters[key] === value ? null : value,
        },
      })
    );
  };
  const modalRef = useRef(null);

  // Effect to handle outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className="genric_dropdown"
      onMouseEnter={() => {
        setOpen(true);
      }}
      ref={modalRef}
    >
      <div className="placeholder">
        {jobFilters[key] ? `${name}:${jobFilters[key]}` : name}
      </div>
      {open && (
        <div
          className="dropdown_options"
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          {options.map((data) => (
            <div
              className="option_value"
              onClick={() => {
                handleUpdateFilter(data);
                setOpen(false);
              }}
            >
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenericDropdown;
