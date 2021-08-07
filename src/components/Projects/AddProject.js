import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import { Link, useHistory } from "react-router-dom";
import CustomInput from "../utilities/CustomInput";
import { notify } from "../utilities/Toast.js";
import { Formik } from "formik";
import { addProjectInitialValues, addProjectValidationSchema } from "./Schema";
import SubmitButton from "../utilities/SubmitButton";
function AddProject() {
  let history = useHistory();
  const [type, setType] = useState("text");
  const [data, setData] = useState({
    clientName: "",
    inverter: "",
    city: "",
    power: "",
    date: "",
    solarPanel: "",
    structure: "",
    batteries: "",
    batteryPack: "",
    batteryWire: "",
    pvWire: "",
    acWire: "",
    upvFitting: "",
    dbFitting: "",
    anchorBolts: "",
    addedBy: "",
  });
  function pushBack() {
    history.goBack();
  }
  useEffect(() => {
    ipcRenderer.on("projectSaved", (event) => {
      console.log("Saved");
      notify("Data Saved Successfully!", "success");
      setTimeout(() => {
        pushBack();
      }, 1500);
    });
  }, []);

  // function submitHandler(e) {
  //   e.preventDefault();
  //   ipcRenderer.send("addNewProject", data);
  //   setData({
  //     clientName: "",
  //     inverter: "",
  //     city: "",
  //     power: "",
  //     date: "",
  //     solarPanel: "",
  //     structure: "",
  //     batteries: "",
  //     batteryPack: "",
  //     batteryWire: "",
  //     pvWire: "",
  //     acWire: "",
  //     upvFitting: "",
  //     dbFitting: "",
  //     anchorBolts: "",
  //     addedBy: "",
  //   });
  // }
  function onValueChangeHandler(e, fieldName) {
    if (fieldName == "clientName") {
      setData({
        ...data,
        clientName: e.target.value,
      });
    } else if (fieldName == "inverter") {
      setData({
        ...data,
        inverter: e.target.value,
      });
    } else if (fieldName == "city") {
      setData({
        ...data,
        city: e.target.value,
      });
    } else if (fieldName == "power") {
      setData({
        ...data,
        power: e.target.value,
      });
    } else if (fieldName == "date") {
      setData({
        ...data,
        date: e.target.value,
      });
    } else if (fieldName == "solarPanel") {
      setData({
        ...data,
        solarPanel: e.target.value,
      });
    } else if (fieldName == "structure") {
      setData({
        ...data,
        structure: e.target.value,
      });
    } else if (fieldName == "batteries") {
      setData({
        ...data,
        batteries: e.target.value,
      });
    } else if (fieldName == "batteryPack") {
      setData({
        ...data,
        batteryPack: e.target.value,
      });
    } else if (fieldName == "batteryWire") {
      setData({
        ...data,
        batteryWire: e.target.value,
      });
    } else if (fieldName == "pvWire") {
      setData({
        ...data,
        pvWire: e.target.value,
      });
    } else if (fieldName == "acWire") {
      setData({
        ...data,
        acWire: e.target.value,
      });
    } else if (fieldName == "upvFitting") {
      setData({
        ...data,
        upvFitting: e.target.value,
      });
    } else if (fieldName == "dbFitting") {
      setData({
        ...data,
        dbFitting: e.target.value,
      });
    } else if (fieldName == "anchorBolts") {
      setData({
        ...data,
        anchorBolts: e.target.value,
      });
    } else if (fieldName == "addedBy") {
      setData({
        ...data,
        addedBy: e.target.value,
      });
    }
  }
  const hanldeSubmit = (values) => {
    console.log("submitted");
    console.log(values);
    ipcRenderer.send("addNewProject", { ...values });
  };
  return (
    <div className=" text-white p-2 col-span-4 absolute right-0 w-4/5  h-screen">
      <Formik
        initialValues={addProjectInitialValues}
        validationSchema={addProjectValidationSchema}
        onSubmit={hanldeSubmit}
      >
        <div className="grid grid-cols-3 p-4 rounded w-full ml-auto mr-auto ">
          <div className="col-span-3 ">
            <Link to="/projects">
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </Link>
          </div>
          <h1 className="text-2xl p-2 mb-3 text-center font-bold col-span-3 text-white ">
            Add New Project
          </h1>
          <CustomInput label="Client Name " name="clientName" />
          <CustomInput label="Inverter  " name="inverter" />
          <CustomInput label="City " name="city" />
          <CustomInput label="Date" name="date" placeholder="Completion Date" />
          <CustomInput label="Power" name="power" />
          <CustomInput label="Solar Panel  " name="solarPanel" />
          <CustomInput label="Batteries " name="batteries" />
          <CustomInput label="Battery Pack " name="batteryPack" />
          <CustomInput label="Structure " name="structure" />
          <CustomInput label="Battery Wire " name="batteryWire" />
          <CustomInput label="AC Wire " name="acWire" />
          <CustomInput label="PV Wire " name="pvWire" />
          <CustomInput label="UPV Fitting " name="upvFitting" />
          <CustomInput label="DB & DP " name="dbAndDp" />
          <CustomInput label="Anchor Bolts " name="anchorBolts" />
          <div className=" mt-5 col-span-3 w-full ">
            <SubmitButton value="Add Project" name="addProject" />
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default AddProject;
