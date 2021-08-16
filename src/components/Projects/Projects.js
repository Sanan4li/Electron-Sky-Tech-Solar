import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ipcRenderer } from "electron";
import TextDateInput from "../utilities/TextDateInput";
import TableHeader from "../utilities/TableHeader";
import { projectsTableHeaders, projectsTableKeys } from "./TableHeaderkeys";
import TableBody from "../utilities/TableBody";
import { notify } from "../utilities/Toast.js";
import DetailsItem from "../utilities/DetailsItem";
import ReactToPrint from "react-to-print";

function Projects() {
  const [singleProjectOpen, setSingleProjectOpen] = useState(false);
  const [singleProjectData, setSingleProjectData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("text");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const componentRef = useRef();
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

  const clickHandler = (button, id) => {
    if (button == "delete") {
      ipcRenderer.send("deleteProject", id);
      ipcRenderer.send("getData", "projects");
      notify("Project Data Deleted!", "success");
    }
    if (button == "open") {
      handleOpenProject(id);
    }
  };

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
  const handleOpenProject = (id) => {
    ipcRenderer.send("openProject", id);
    setSingleProjectOpen(true);
  };

  return (
    <>
      <div className=" text-gray-200 p-6 col-span-4 absolute right-0 w-4/5  h-screen">
        <h1 className="  text-2xl m-3">All Projects</h1>
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
        <table className="table-auto w-full p-4 shadow-lg mt-5 ">
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
        <div className="w-full absolute flex items-center z-50 bg-transparent h-screen">
          <div className=" bg-gray-50  w-3/5  text-center align-middle ml-auto mr-auto ">
            <div className="w-full flex justify-center items-center  ">
              <div className="w-10/12  ">
                <h1 className="text-center text-xl"></h1>
              </div>
              <div className="w-2/12  flex ml-10">
                <ReactToPrint
                  trigger={() => (
                    <button
                      className=" pt-2 pl-2 pb-2.5 pr-2  text-right rounded-sm text-gray-800 font-semibold block mr-0  cursor-pointer hover:text-black focus:outline-none"
                      onClick={() => {
                        console.log("printing...");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                    </button>
                  )}
                  content={() => componentRef.current}
                />
                <button
                  className=" pt-2 pl-2 pb-2.5 pr-2  text-right rounded-sm text-gray-800 font-semibold block mr-0  cursor-pointer hover:text-black  focus:outline-none"
                  onClick={() => {
                    setSingleProjectOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="mt-5 mb-3 w-11/12 ml-auto mr-auto"
              ref={componentRef}
            >
              <h1 className="text-2xl p-2 text-blue-600 font-bold text-center w-full">
                Project Details
              </h1>

              {singleProjectData.map((project, index) => {
                return (
                  <div className="mb-10">
                    <DetailsItem
                      name="Client Name"
                      value={project.clientName}
                    />
                    <DetailsItem name="City" value={project.city} />
                    <DetailsItem name="Inverter" value={project.inverter} />
                    <DetailsItem name="Completion Date" value={project.date} />
                    <DetailsItem name="Power" value={project.power} />
                    <DetailsItem
                      name="Solar Panel"
                      value={project.solarPanel}
                    />
                    <DetailsItem name="Batteries" value={project.batteries} />
                    <DetailsItem
                      name="Battery Rack"
                      value={project.batteryRack}
                    />
                    <DetailsItem name="Structure" value={project.structure} />
                    <DetailsItem
                      name="Battery Wire"
                      value={project.batteryWire}
                    />
                    <DetailsItem name="AC Wire" value={project.acWire} />
                    <DetailsItem name="PV Wire" value={project.pvWire} />
                    <DetailsItem
                      name="UPV Fitting"
                      value={project.upvFitting}
                    />
                    <DetailsItem name="DB & DP " value={project.dbFitting} />
                    <DetailsItem
                      name="Anchor Bolts"
                      value={project.anchorBolts}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
