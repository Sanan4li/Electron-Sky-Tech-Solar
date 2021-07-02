import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
function TableRow({ search, fromDate, toDate, handleOpenProject }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ipcRenderer.send("getData", "projects");
    ipcRenderer.on("projectsData", (event, data) => {
      setProjects(data);
      setLoading(false);
      if (search != "") {
        let searchedData = data.filter((d) => {
          return d.clientName.toLowerCase().includes(search.toLowerCase());
        });
        setProjects(searchedData);
      }
      if (fromDate !== "" && toDate !== "") {
        let searchedData = data.filter((d) => {
          return d.date >= fromDate && d.date <= toDate;
        });
        setProjects(searchedData);
      }
    });

    ipcRenderer.on("projectsDeleted", (event, data) => {
      console.log("deleted");
    });
  }, [search, toDate]);
  useEffect(() => {
    return () => {
      ipcRenderer.removeAllListeners();
    };
  }, []);

  // click handler function to delete or view row
  function clickHandler(button, id) {
    if (button == "delete") {
      ipcRenderer.send("deleteProject", id);
      ipcRenderer.send("getData", "projects");
    }
    if (button == "open") {
      handleOpenProject(id);
    }
  }

  return loading ? (
    <tr>
      <td
        colSpan="7"
        className="w-full p-2 text-center text-2xl text-white font-semibold"
      >
        Loading Data....
      </td>
    </tr>
  ) : projects.length == 0 ? (
    <tr>
      <td
        colSpan="7"
        className="w-full p-2 text-center text-2xl text-white font-semibold"
      >
        No Record Found.
      </td>
    </tr>
  ) : (
    projects.map((project) => {
      return (
        <>
          <tr
            className="border-t-2 border-gray-300 bg-blue-600 text-gray-100"
            key={project.id}
          >
            <td className="p-2">{project.clientName}</td>
            <td className="p-2">{project.inverter}</td>
            <td className="p-2">{project.city}</td>
            <td className="p-2">{project.date}</td>
            <td className="p-2">{project.solarPanel}</td>
            <td className="p-2">{project.structure}</td>
            <td className="p-2">{project.batteries}</td>
            <td className="p-2">{project.batteryPack}</td>
            <td className="p-2">
              <button
                className="focus:outline-none "
                onClick={() => {
                  clickHandler("delete", project.id);
                }}
                title="Delete Record"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </button>
            </td>
            <td className="p-2">
              <button
                className="focus:outline-none "
                title="View Details"
                onClick={() => {
                  clickHandler("open", project.id);
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
        </>
      );
    })
  );
}
export default TableRow;
