import React, { useState, useEffect } from "react";
import TextDateInput from "../utilities/TextDateInput";
import { Link } from "react-router-dom";
function Stock() {
  const [singleProjectOpen, setSingleProjectOpen] = useState(false);
  const [singleProjectData, setSingleProjectData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("text");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");

  const changeType = () => {
    setType("date");
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const clearDates = () => {
    setType("text");
    setFromDate("");
    setToDate("");
  };
  const onDateChange = (e, fieldName) => {
    if (fieldName == "from") {
      setFromDate(e.target.value);
    } else if (fieldName == "to") {
      if (fromDate == "") {
        notify("Please Select From Date First...", "error");
        clearDates();
        return;
      }
      setToDate(e.target.value);
    }
  };

  return (
    <>
      <div className=" text-gray-200 p-6 col-span-4 absolute right-0 w-4/5  h-screen">
        <h1 className="  text-2xl m-3">Available Stock</h1>
        <div className="flex flex-row  p-2 w-full">
          <div className="w-2/3  p-1">
            <Link
              to="/addproject"
              className="bg-gray-200 pt-2 pl-2 pb-2.5 pr-2  w-2/3 text-center rounded-sm text-gray-900 font-semibold hover:bg-gray-100 hover:text-gray-900"
              title="Add New Project"
            >
              <svg
                className="w-6 h-6 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </Link>
            <TextDateInput
              type={type}
              value={fromDate}
              placeholder="From (date)"
              title="Select From Date"
              name="from"
              onFocus={changeType}
              onChange={onDateChange}
            />
            <TextDateInput
              type={type}
              value={toDate}
              placeholder="To (date)"
              title="Select To Date"
              name="to"
              onFocus={changeType}
              onChange={onDateChange}
            />

            <a
              className="bg-gray-100 pt-2 pl-2 pb-2.5 pr-2 ml-5  w-2/3 text-center rounded-sm text-gray-900 font-semibold hover:bg-white hover:text-black cursor-pointer"
              title="Clear Date Filter"
              onClick={() => {
                clearDates();
              }}
            >
              <svg
                className="w-6 h-6 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-1/3 ">
            <input
              type="text"
              autoFocus={true}
              value={search}
              onChange={(e) => {
                onSearchChange(e);
              }}
              className="w-full py-2 px-2 mt-2 text-gray-900 rounded-sm focus:outline-none"
              placeholder="Client Name to Search"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stock;
