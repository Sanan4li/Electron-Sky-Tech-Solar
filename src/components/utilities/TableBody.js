import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ipcRenderer } from "electron";
const TableBody = ({ loading, data, clickHandler, keys, buttons = [] }) => {
  const [pageNumber, setPageNumber] = useState(0);

  let windowHeight = window.innerHeight;
  const usersPerPage = Math.floor(windowHeight / 90);
  const pagesVisited = pageNumber * usersPerPage;
  console.log(windowHeight);
  ipcRenderer.on("resized", (event, data) => {
    console.log(data);
    windowHeight = data;
  });
  const displayData = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((project, index) => {
      return (
        <>
          <tr
            className="border-t-2 border-gray-500 bg-gray-900 hover:bg-gray-700 text-gray-300"
            key={`project_${index}`}
          >
            {keys.map((key, index) => {
              return (
                <td key={`item_${index}`} className="p-2">
                  {project[key]}
                </td>
              );
            })}

            {buttons.length > 0 ? (
              <>
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
              </>
            ) : (
              ""
            )}
          </tr>
        </>
      );
    });

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return loading ? (
    <tr>
      <td
        colSpan="7"
        className="w-full p-2 text-center text-2xl text-white font-semibold"
      >
        Loading Data....
      </td>
    </tr>
  ) : data.length == 0 ? (
    <tr>
      <td
        colSpan="7"
        className="w-full p-2 text-center text-2xl text-gray-200 font-semibold"
      >
        <h2> No Record Found. </h2>
      </td>
    </tr>
  ) : (
    <>
      {displayData}
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        pageLinkClassName=" p-2 m-1"
        containerClassName=" w-9/12 flex item-center justify-center fixed text-gray-400 p-3 mt-5 ml-1 "
        previousLinkClassName={" p-2 m-1"}
        nextLinkClassName={" p-2 m-1"}
        disabledClassName={"text-gray-500"}
        activeClassName={"bg-blue-600 text-gray-100 font-bold"}
      />
    </>
  );
};

export default TableBody;
