import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Food({ food }) {
  return (
    <Card>
      <Card.Img loading="lazy" variant="top" src={food.image} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text>{food.description}</Card.Text>
        <Link to={`/foods/${food.id}/recipes`}>
          <Button variant="primary" size="sm">
            Browse Recipe
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Food;
