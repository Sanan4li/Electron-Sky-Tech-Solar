import React from "react";
const MainArea = function(){
    return(
      <div className=" p-1 col-span-4 absolute right-0 w-4/5  h-auto">
            <div className="grid grid-cols-3">
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-red-600">
                    <div>
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">In Demand</h2>
                        <p className="text-xl">Low Quantity Items : 40</p>
                    </div>
                </div>
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-green-500">
                    <div>
                     <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Stock</h2>
                        <p className="text-xl">Total Items : 340</p>
                    </div>
                </div>
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-indigo-600">
                    <div>
                        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Projects</h2>
                        <p className="text-xl">Total Projects : 80</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-green-500">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Payments</h2>
                        <p className="text-xl">Remaining Payments : 40</p>
                    </div>
                </div>
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-green-500">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Quotes</h2>
                        <p className="text-xl">Saved Quotes : 20</p>
                    </div>
                </div>
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-indigo-600">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Used</h2>
                        <p className="text-xl">Add New Used Item</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-green-500">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Reports</h2>
                        <p className="text-xl">Generate Reports</p>
                    </div>
                </div>
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-green-500">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">About</h2>
                        <p className="text-xl">About This Software</p>
                    </div>
                </div>
                <div  className="col-span-1 hover:shadow-xl cursor-pointer bg-white flex flex-col items-center m-8 p-5 rounded-xl text-indigo-600">
                    <div>
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <div className="w-full text-center">
                        <h2 className="text-2xl font-semibold align-center w-full ">Developer</h2>
                        <p className="text-xl">Contact Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea;
