import React, {useState, useEffect} from 'react';
import {ipcRenderer} from "electron";
 function SingleProject() {
   const [project, setProject] = useState(null);
   useEffect(() => {
    ipcRenderer.on("projectLoaded", (data)=>{
      setProject(data)
    });
   });
  return (
    <div>
        <h1>Welcome to Projects window</h1>
        <h2>{project.clientName}</h2>
    </div>
  )
}
export default SingleProject;
