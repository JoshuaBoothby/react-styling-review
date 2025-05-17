import React, { useState } from "react";
import styles from "./Card.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CustomCard() {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive((prev) => !prev);

  return (
    <Card
      className={`${styles.card} ${active ? styles.active : ""}`}
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>Hover Card</Card.Title>
        <Card.Text>Click the button to activate lift off.</Card.Text>
        <Button variant="primary" onClick={handleToggle}>
          Hover Button
        </Button>
      </Card.Body>
    </Card>
  );
}
