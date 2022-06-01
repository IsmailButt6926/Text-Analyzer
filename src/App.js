import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light"); // wheter darkmode is enable or not

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "White";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils " mode={mode} togglemode={togglemode} />
        <Alert alert="This is a message" />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textform mode={mode} heading="Enter the text to analyze" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
