import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ipcRenderer } from "electron";
import TableRow from "./small/TableRow";

function Projects() {
  const [singleProjectOpen, setSingleProjectOpen] = useState(false);
  const [singleProjectData, setSingleProjectData] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFrom, setTypeFrom] = useState("text");
  const [typeTo, setTypeTo] = useState("text");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  useEffect(() => {
    ipcRenderer.on("singleProject", (event, data) => {
      console.log(data);
      setSingleProjectData(data);
    });
  }, [search]);

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function clearDates() {
    setTypeFrom("text");
    setTypeTo("text");
    setFromDate("");
    setToDate("");
  }
  function onDateChange(e, fieldName) {
    if (fieldName == "from") {
      setFromDate(e.target.value);
    } else if (fieldName == "to") {
      if (fromDate == "") {
        setFromDate("Please Select Date");
        return;
      }
      setToDate(e.target.value);
    }
  }
  function handleOpenProject(id) {
    ipcRenderer.send("openProject", id);
    setSingleProjectOpen(true);
  }

  return (
    <>
      <div className=" text-white p-5 col-span-4 absolute right-0 w-4/5  h-screen">
        <h1 className="  text-2xl m-3">All Projects</h1>
        <div className="flex flex-row  p-2 w-full">
          <div className="w-2/3  p-2">
            <Link
              to="/addproject"
              className="bg-gray-100 pt-2 pl-2 pb-2.5 pr-2  w-2/3 text-center rounded-sm text-gray-900 font-semibold hover:bg-white hover:text-black"
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
            <input
              type={typeFrom}
              value={fromDate}
              placeholder="From (date)"
              className="py-2 px-2 ml-2  w-1/3 rounded-sm text-gray-900 focus:outline-none "
              title="Select From Date"
              onFocus={() => {
                setTypeFrom("date");
              }}
              onChange={(e) => {
                onDateChange(e, "from");
              }}
            />
            <input
              type={typeTo}
              value={toDate}
              placeholder="To (date)"
              className=" py-2 px-2 ml-2  w-1/3  rounded-sm text-gray-900 focus:outline-none "
              title="Select To Date"
              onFocus={() => {
                setTypeTo("date");
              }}
              onChange={(e) => {
                onDateChange(e, "to");
              }}
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
        <table className="table-auto w-full p-4">
          <thead className="text-left">
            <tr className="bg-blue-600">
              <th className="p-2">Client Name</th>
              <th className="p-2">Inverter</th>
              <th className="p-2">City/Location</th>
              <th className="p-2">Completion Date</th>
              <th className="p-2">Solar Panel</th>
              <th className="p-2">Structure</th>
              <th className="p-2">Batteries</th>
              <th className="p-2">Battery Pack</th>
              <th className="p-2"></th>
              <th className="p-2"></th>
            </tr>
          </thead>

          <tbody className="">
            <TableRow
              search={search}
              fromDate={fromDate}
              toDate={toDate}
              handleOpenProject={handleOpenProject}
            />
          </tbody>
        </table>
      </div>
      {singleProjectOpen && (
        <div className="w-full absolute z-50 bg-transparent ">
          <div className=" bg-gray-50 w-4/5 ml-auto mr-auto p-3 mt-10">
            <div className="w-full ">
              <a
                className=" pt-2 pl-2 pb-2.5 pr-2  text-right rounded-sm text-gray-800 font-semibold block mr-0  cursor-pointer hover:text-black"
                onClick={() => {
                  setSingleProjectOpen(false);
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
            <p>Twat</p>
            {singleProjectData.map((project) => {
              return (
                <div>
                  <p>{project.clientName}</p>
                  <p>{project.inverter}</p>
                  <p>{project.city}</p>
                  <p>{project.date}</p>
                  <p>{project.solarPanel}</p>
                  <p>{project.structure}</p>
                  <p>{project.batteries}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
