import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [text, settext] = useState("Enable Dark Mode");
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      settext("Disable Dark Mode");
      document.body.style.backgroundColor = "#282b2e";
    } else {
      setMode("light");
      settext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/"> */}
            <TextForm
              heading="Enter the text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          {/* </Route>
          <Route exact path="/about"> */}
            {/* <About mode={mode} /> */}
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
