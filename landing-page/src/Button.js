import React from "react";
import Button from "react-bootstrap/Button";

function ButtonComponent(props) {
  return (
    <div>
      <Button className="btn" variant="primary">
        {props.children}
      </Button>{" "}
    </div>
  );
}

export default ButtonComponent;
