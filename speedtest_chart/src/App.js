import React from "react";

import LineChart from "./components/LineChart";
import { Card, ListGroup } from "react-bootstrap";
import speedResults from "./results.json";

import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="display-2 text-center"> Speed Tests </h1>
      <hr />
      <h2 className="text-center">{speedResults["010622"]["date_str"]}</h2>
      <div className="Container">
        <div className="row">
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Header>Download</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>Avg Download: </b>
                  {speedResults["010622"]["avg_download"]} Mbps
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Max Download: </b>
                  {speedResults["010622"]["max_download"]} Mbps
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Min Download: </b>
                  {speedResults["010622"]["min_download"]} Mbps
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Header>Upload</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>Avg Upload: </b>
                  {speedResults["010622"]["avg_upload"]} Mbps
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Max Upload: </b>
                  {speedResults["010622"]["max_upload"]} Mbps
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Min Upload: </b>
                  {speedResults["010622"]["min_upload"]} Mbps
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Header>Ping</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
      <LineChart />
    </>
  );
};

export default App;
