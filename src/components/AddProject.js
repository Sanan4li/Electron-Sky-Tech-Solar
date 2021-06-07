import React, {useState, useEffect} from 'react';
import {ipcRenderer} from "electron";
import {Link} from "react-router-dom";
 function AddProject() {
   const [type, setType] = useState("text");
   const [saved, setSaved] = useState("");
   const [data, setData] = useState({
     clientName :"",
     inverter: "",
     city: "",
     power : "",
     date: "",
     solarPanel: "",
     structure : "",
     batteries: "",
     batteryPack: "",
     batteryWire: "",
     pvWire: "",
     acWire: "",
     upvFitting: "",
     dbFitting: "",
     anchorBolts:"",
     addedBy: "",
   });

   useEffect(()=>{
    ipcRenderer.on("projectSaved", (event,)=>{
      console.log("Saved");
      setSaved("Data has been saved successfully!");
      setTimeout(()=>{
        setSaved("");
      },2000);
     });
   }, []);


   function submitHandler(e){
     e.preventDefault();
    ipcRenderer.send("addNewProject", data);
    setData({
        clientName :"",
        inverter: "",
        city: "",
        power : "",
        date: "",
        solarPanel: "",
        structure : "",
        batteries: "",
        batteryPack: "",
        batteryWire: "",
        pvWire: "",
        acWire: "",
        upvFitting: "",
        dbFitting: "",
        anchorBolts:"",
        addedBy: "",
        })
   }
   function onValueChangeHandler(e, fieldName){
     if(fieldName=="clientName"){
       setData({
         ...data,
         clientName: e.target.value,
       });
     }
     else if(fieldName=="inverter"){
      setData({
        ...data,
        inverter: e.target.value,
      });
     }
     else if(fieldName=="city"){
      setData({
        ...data,
        city: e.target.value,
      });
     }
     else if(fieldName=="power"){
      setData({
        ...data,
        power: e.target.value,
      });
     }
     else if(fieldName=="date"){

      setData({
        ...data,
        date: e.target.value,
      });
    }
    else if(fieldName=="solarPanel"){
      setData({
        ...data,
        solarPanel: e.target.value,
      });
    }
    else if(fieldName=="structure"){
      setData({
        ...data,
        structure: e.target.value,
      });
    }
    else if(fieldName=="batteries"){
      setData({
        ...data,
        batteries: e.target.value,
      });
    }
    else if(fieldName=="batteryPack"){
      setData({
        ...data,
        batteryPack: e.target.value,
      });
    }
    else if(fieldName=="batteryWire"){
      setData({
        ...data,
        batteryWire: e.target.value,
      });
    }
    else if(fieldName=="pvWire"){
      setData({
        ...data,
        pvWire: e.target.value,
      });
    }
    else if(fieldName=="acWire"){
      setData({
        ...data,
        acWire: e.target.value,
      });
    }
    else if(fieldName=="upvFitting"){
      setData({
        ...data,
        upvFitting: e.target.value,
      });
    }
    else if(fieldName=="dbFitting"){
      setData({
        ...data,
        dbFitting: e.target.value,
      });
    }
    else if(fieldName=="anchorBolts"){
      setData({
        ...data,
        anchorBolts: e.target.value,
      });
    }
    else if(fieldName=="addedBy"){
      setData({
        ...data,
        addedBy: e.target.value,
      });
    }
   }

  return (
    <div className=" text-white p-5 col-span-4 absolute right-0 w-4/5  h-screen">
      <form onSubmit={(e)=>{submitHandler(e)}}>

        <div className="grid grid-cols-2 p-5 rounded w-full ml-auto mr-auto ">
          <div className="col-span-2 ">
          <Link to="/projects">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </Link>
            <h2 className="text-gray-100  left-20 top-5 text-2xl w-4/5 absolute text-center font-bold">{saved}</h2>
          </div>
        <h1 className="text-2xl p-2 mb-3 text-center font-bold col-span-2 text-white ">Add New Project</h1>

          <div className="w-full flex flex-row">
             <div className=" w-1/2 py-2">
             <label >Client Name : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" autoFocus={true} className="p-2  rounded-sm w-full text-black " value={data.clientName}  onChange={(e)=>{ onValueChangeHandler(e, "clientName")}} />
              </div>
          </div>
          <div className=" w-full flex flex-row">
             <div className=" w-1/2 py-2 ml-6">
             <label>Inverter  : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.inverter}  onChange={(e)=>{ onValueChangeHandler(e, "inverter")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >Location / City : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.city}  onChange={(e)=>{ onValueChangeHandler(e, "city")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label >Power : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.power}  onChange={(e)=>{ onValueChangeHandler(e, "power")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >Completion Date : </label>
             </div>
              <div  className="w-1/2">
              <input type={type} className="p-2 rounded-sm w-full text-black" onFocus={()=>{setType("date")}} value={data.date}  onChange={(e)=>{ onValueChangeHandler(e, "date")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label >Solar Panel : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.solarPanel}  onChange={(e)=>{ onValueChangeHandler(e, "solarPanel")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >Structure : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.structure}  onChange={(e)=>{ onValueChangeHandler(e, "structure")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label >Batteries : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.batteries}  onChange={(e)=>{ onValueChangeHandler(e, "batteries")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >Battery Pack : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.batteryPack}  onChange={(e)=>{ onValueChangeHandler(e, "batteryPack")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label >Battery Wire : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.batteryWire}  onChange={(e)=>{ onValueChangeHandler(e, "batteryWire")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >PV Wire : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.pvWire}  onChange={(e)=>{ onValueChangeHandler(e, "pvWire")}} />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label >AC Wire : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.acWire}  onChange={(e)=>{ onValueChangeHandler(e, "acWire")}} />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >UPV Fitting : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.upvFitting}  onChange={(e)=>{ onValueChangeHandler(e, "upvFitting")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label >DB & DP : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.dbFitting}  onChange={(e)=>{ onValueChangeHandler(e, "dbFitting")}} />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2">
             <label >Anhor Bolts : </label>
             </div>
              <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.anchorBolts}  onChange={(e)=>{ onValueChangeHandler(e, "anchorBolts")}}  />
              </div>
          </div>
          <div className="w-full flex flex-row mt-5">
             <div className=" w-1/2 py-2 ml-6">
             <label> Added By :</label>
             </div>
             <div  className="w-1/2">
              <input type="text" className="p-2 rounded-sm w-full text-black " value={data.addedBy}  onChange={(e)=>{ onValueChangeHandler(e, "addedBy")}} />
             </div>
          </div>
          <div className="col-span-2 mt-5 p-2  text-center">
            <input type="submit" value="Add Project" className="w-1/4 p-2 font-semibold rounded-sm text-gray-900 bg-gray-100 hover:bg-white hover:text-black cursor-pointer" />
          </div>
        </div>
      </form>
    </div>
  )
}



export default AddProject;
