import React from "react";
import { Link } from "react-router-dom";
const SideBar = function(){
  return(
    <div className="bg-indigo-600 col-span-1 w-1/5 z-10  h-screen fixed  text-white ">
    <h2 className="p-2 text-center font-semibold text-xl font-sans ">Sky Tech Solar</h2>

    <ul className="flex flex-col justify-center items-center">
    <li className="border-gray-300 border-t-2 w-4/5"></li>
        <Link to="/" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Home</span>
            </div>

        </Link>
        <Link to="/stock" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Stock</span>
            </div>

        </Link>
        <Link to="/projects" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Projects</span>
            </div>

        </Link>
        <Link to="/payments" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Payments</span>
            </div>

        </Link>
         <Link to="/demand" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Demand</span>
            </div>

        </Link>
         <Link to="/quotes" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Quotes</span>
            </div>

        </Link>
        <Link to="/used" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Used</span>
            </div>

        </Link>
        <Link to="/reports" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Reports</span>
            </div>

        </Link>
        <li className="border-gray-300 border-t-2 w-4/5"></li>
        <Link to="/about" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>About</span>
            </div>

        </Link>
        <Link to="/contact" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Contact</span>
            </div>

        </Link>
        <li className="border-gray-300 border-t-2 w-4/5"></li>
        <Link to="/report" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Report</span>
            </div>

        </Link>
        <Link to="/developer" className="flex flex-row justify-center p-1 hover:bg-indigo-700 cursor-pointer w-full focus:outline-none">
            <div className="w-1/5 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div  className="w-2/5 p-2">
                <span>Developer</span>
            </div>

        </Link>
    </ul>

</div>


  )
}



export default SideBar;



