import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./components/demo";
import Toast from "./components/ScheduleListView/tost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DemoComponent message={"Welcome my repo"} />
        <Toast />
      </header>
    </div>
  );
}

export default App;
