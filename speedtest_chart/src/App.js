import React from "react";

import LineChart from "./components/LineChart";

import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="display-1 text-center"> Speed Tests </h1>
      <div>
        <LineChart />
      </div>
    </>
  );
};

export default App;
