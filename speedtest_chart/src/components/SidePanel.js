import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import speedResults from "../results.json";

import "./SidePanel.css";

export const SidePanel = ({ viewDate }) => {
  let dateId = speedResults["datesRecorded"][viewDate];

  return (
    <>
      <Card className="card-width" style={{ width: "18rem" }}>
        <Card.Header>
          <i className="fas-spacing fas fa-download"></i>Download
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Avg Download: </b>
            {speedResults[dateId]["avg_download"]} Mbps
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Max Download: </b>
            {speedResults[dateId]["max_download"]} Mbps
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Min Download: </b>
            {speedResults[dateId]["min_download"]} Mbps
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className="card-width" style={{ width: "18rem" }}>
        <Card.Header>
          <i className="fas-spacing fas fa-upload"></i>Upload
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Avg Upload: </b>
            {speedResults[dateId]["avg_upload"]} Mbps
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Max Upload: </b>
            {speedResults[dateId]["max_upload"]} Mbps
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Min Upload: </b>
            {speedResults[dateId]["min_upload"]} Mbps
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className="card-width" style={{ width: "18rem" }}>
        <Card.Header>
          <i className="fas-spacing fas fa-map-marker-alt"></i>Ping
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>Avg Ping: </b>
            {speedResults[dateId]["avg_ping"]} Mbps
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};
