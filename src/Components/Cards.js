import React from 'react';
import Card from 'react-bootstrap/Card';


export default function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
        {props.name}
        </Card.Title>

        <Card.Text>
        {props.gender}
        </Card.Text>

        <Card.Text>
        {props.species}
        </Card.Text>

        <Card.Text>
        {props.status}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

