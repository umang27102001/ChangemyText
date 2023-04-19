import { useState } from "react";
import Alert from "./Alert";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Mode1 from '../src/light.png' 
import Mode2 from '../src/night.png' 
import TextForm from "./components/TextForm";
import React from "react";
function App() {
  const[modeIcon,setModeIcon]=useState(Mode2);
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, status) => {
    setAlert({
      status: status,
      message: message,
    });
  };
  const toggleMode = () => {
    if (mode == "light") {
      setmode("dark");
      setModeIcon(Mode1);
      document.body.style.backgroundColor = "#2d2f2e";
      document.title = "TextUtils Dark";
      document
        .getElementsByTagName("link")[0]
        .setAttribute("href", "/text-format.png");
      showAlert("Dark Mode Enabled", "success");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
    } else {
      document.body.style.backgroundColor = "white";
      setModeIcon(Mode2);
      document.title = "TextUtils Light";
      document
        .getElementsByTagName("link")[0]
        .setAttribute("href", "/file.png");
      setmode("light");
      showAlert("Light Mode Enabled", "success");
      setTimeout(() => {
        showAlert(null);
      }, 1500);
    }
  };
  return (
    <>
      <NavBar title="Textutils" myMode={mode} modeIcon={modeIcon} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About myMode={mode}/> */}
      <TextForm myMode={mode} head="Enter Text Below" showAlert={showAlert} />
    </>
  );
}
export default App;
