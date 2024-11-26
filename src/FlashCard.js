import React from 'react';
import { Card } from 'react-bootstrap';

function FlashCard({ title, subtitle, body, icon }) {
  return (
    <Card className="mb-4 shadow border-0">
      <Card.Body>
        <div className="d-flex align-items-start">
          {icon && <div className="icon me-3">{icon}</div>}
          <div>
            <Card.Title className="fw-bold">{title}</Card.Title>
            {subtitle && <Card.Subtitle className="text-muted mb-3">{subtitle}</Card.Subtitle>}
            <Card.Text>{body}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FlashCard;
