import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJira,
  SiAsana,

} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { DiMysql } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAsana/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoftTeams />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
      </Col>
    </Row>
  );
}

export default Toolstack;
