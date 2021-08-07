const {
  app,
  BrowserWindow,
  globalShortcut,
  Menu,
  ipcMain,
} = require("electron");
const path = require("path");
const url = require("url");
const db = require("electron-db");
let location = path.join(__dirname + "/database");
// require('electron-reload')(__dirname);

let mainWindow;
let dev = false;
if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  dev = true;
}

if (process.platform === "win32") {
  app.commandLine.appendSwitch("high-dpi-support", "true");
  app.commandLine.appendSwitch("force-device-scale-factor", "1");
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    minWidth: 1200,
    minHeight: 760,
    backgroundColor: "#113ad1",
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // createTable("projects");
  let indexPath;
  globalShortcut.register("f5", function () {
    console.log("f5 is pressed");
    mainWindow.reload();
  });
  globalShortcut.register("Control+Shift+i", function () {
    mainWindow.webContents.openDevTools();
  });
  globalShortcut.register("CommandOrControl+R", function () {
    console.log("CommandOrControl+R is pressed");
    mainWindow.reload();
  });
  if (dev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:8080",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    if (dev) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
      } = require("electron-devtools-installer");

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
        console.log("Error loading React DevTools: ", err)
      );
      // mainWindow.webContents.openDevTools()
    }
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    app.quit();
    mainWindow = null;
    singleProjectWindow = null;
  });
  Menu.setApplicationMenu(null);
}

// creation of table
function createTable(table) {
  db.createTable(table, location, (succ, msg) => {
    // succ - boolean, tells if the call is successful
    if (succ) {
      console.log(msg);
    } else {
      console.log("An error has occured. " + msg);
    }
  });
}

// saving new project
ipcMain.on("addNewProject", (event, data) => {
  saveData("projects", data);
  mainWindow.webContents.send("projectSaved");
});

// deleting data
ipcMain.on("deleteProject", (event, id) => {
  deleteData("projects", id);
  mainWindow.webContents.send("projectDeleted");
});

// getting data
ipcMain.on("getData", (event, tableName) => {
  const data = getData(tableName);
  mainWindow.webContents.send("projectsData", data);
});

// getting single project
ipcMain.on("openProject", (event, id) => {
  // singleProjectWindow = new BrowserWindow({
  //   minHeight:700,
  //   minWidth: 800,
  // });
  // console.log("window opened");
  // singleProjectWindow.loadURL()
  const data = getSingleProject(id);
  console.log(data);
  mainWindow.webContents.send("singleProject", data);
});

// get data from database -- a general function
function getData(tableName) {
  let allRows;
  db.getAll(tableName, location, (succ, data) => {
    if (succ) {
      allRows = data;
    }
  });
  return allRows;
}

// getting single project function

function getSingleProject(id) {
  let projectData;
  db.getRows(
    "projects",
    location,
    {
      id,
    },
    (succ, result) => {
      // console.log(succ, result);
      if (succ) {
        projectData = result;
      }
    }
  );
  return projectData;
}

// save data to a table -- a general function
function saveData(tableName, data) {
  if (db.valid(tableName, location)) {
    db.insertTableContent(tableName, location, data, (succ, msg) => {
      if (succ) {
        return true;
      }
      return false;
    });
  }
}

// deleteing data from a table -- general function
function deleteData(tableName, id) {
  console.log(id);
  db.deleteRow(tableName, location, { id }, (succ, msg) => {});
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
