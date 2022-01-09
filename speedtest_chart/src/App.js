import React, { useState } from "react";

import LineChart from "./components/LineChart";
import { SidePanel } from "./components/SidePanel";
import { Card, ListGroup } from "react-bootstrap";
import speedResults from "./results.json";

import "./App.css";

const App = () => {
  const [date, setDate] = useState(0);
  const [disableForward, setDisableForward] = useState(false);
  const [disableBackward, setDisableBackward] = useState(false);

  let dateId = speedResults["datesRecorded"][date];

  const dateIncrease = () => {
    if (date + 1 < speedResults["datesRecorded"].length) {
      setDate(date + 1);
      setDisableForward(false);
    }

    if (date + 1 < speedResults["datesRecorded"].length) {
      setDisableForward(true);
    } else {
      setDisableForward(false);
    }
  };

  const dateDecrease = () => {
    if (date - 1 >= 0) {
      setDate(date - 1);
      setDisableBackward(false);
    } else {
      setDisableBackward(true);
    }
  };

  return (
    <>
      <h1 className="display-2 text-center"> Speed Tests </h1>
      <hr />
      <h2 className="text-center">
        <i
          className={`fas-button fas fa-arrow-left ${
            disableForward ? "fas-button-disable" : ""
          }`}
          onClick={dateIncrease}
        ></i>
        {speedResults[dateId]["date_str"]}
        <i className="fas-button fas fa-arrow-right" onClick={dateDecrease}></i>
      </h2>

      <div className="Container">
        <div className="row">
          <div className="col-2 card-div">
            <SidePanel viewDate={date} />
          </div>
          <div className="col-10">
            <LineChart viewDate={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
