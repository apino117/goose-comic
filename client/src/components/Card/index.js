import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

const Card = ({ title, date, src, alt }) => {

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {title}{date}
          </strong>
        </h3>
      </div>
      <div className="card-body">

        <Container fluid>
          <Row>
            <Col size="lg">
              <img className="card-img-top"
                src={src}
                alt={alt}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Card;
