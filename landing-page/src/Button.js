import React from "react";
import Button from "react-bootstrap/Button";

function ButtonComponent(props) {
  return (
    <div>
      <Button style={{ backgroundColor: "#7b66ff" }}>{props.children}</Button>
    </div>
  );
}

export default ButtonComponent;
