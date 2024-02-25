import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./components/demo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DemoComponent message={"Welcome my repo"} />
      </header>
    </div>
  );
}

export default App;
