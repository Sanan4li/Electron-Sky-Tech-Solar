import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ipcRenderer } from "electron";
import TextDateInput from "../utilities/TextDateInput";
import TableHeader from "../utilities/TableHeader";
import { projectsTableHeaders, projectsTableKeys } from "./TableHeaderkeys";
import TableBody from "../utilities/TableBody";
import { notify } from "../utilities/Toast.js";
function Projects() {
  const [singleProjectOpen, setSingleProjectOpen] = useState(false);
  const [singleProjectData, setSingleProjectData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("text");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");

  useEffect(() => {
    ipcRenderer.on("singleProject", (event, data) => {
      console.log(data);
      setSingleProjectData(data);
    });

    ipcRenderer.send("getData", "projects");
    ipcRenderer.on("projectsData", (event, data) => {
      setProjects(data);
      setLoading(false);
      if (fromDate !== "" && toDate !== "") {
        let searchedData = data.filter((d) => {
          return d.date >= fromDate && d.date <= toDate;
        });
        setProjects(searchedData);
      }
      if (search != "") {
        let searchedData = data.filter((d) => {
          return d.clientName.toLowerCase().includes(search.toLowerCase());
        });
        setProjects(searchedData);
      }
    });

    ipcRenderer.on("projectsDeleted", (event, data) => {
      console.log("deleted");
    });
  }, [search, toDate, fromDate]);

  useEffect(() => {
    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  function clickHandler(button, id) {
    if (button == "delete") {
      ipcRenderer.send("deleteProject", id);
      ipcRenderer.send("getData", "projects");
      notify("Project Data Deleted!", "success");
    }
    if (button == "open") {
      handleOpenProject(id);
    }
  }

  function changeType() {
    setType("date");
  }
  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function clearDates() {
    setType("text");
    setFromDate("");
    setToDate("");
  }
  function onDateChange(e, fieldName) {
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
        <table className="table-auto w-full p-4">
          <TableHeader data={projectsTableHeaders} />
          <tbody className="">
            <TableBody
              loading={loading}
              data={projects}
              clickHandler={clickHandler}
              keys={projectsTableKeys}
              buttons={["delete", "open"]}
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

            {singleProjectData.map((project, index) => {
              return (
                <div key={`single_${index}`}>
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
