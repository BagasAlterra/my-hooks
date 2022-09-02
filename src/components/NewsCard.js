import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = (props) => {
  return (
    <Card style={{ width: "18rem", margin: 20 }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={props.onClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
