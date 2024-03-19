import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function ButtonComponent(props) {
  return (
    <div>
      <button className="btn-component" type="button">
        {props.children}
      </button>

      {/* <Button className="btn-primary">{props.children}</Button> */}
    </div>
  );
}

export default ButtonComponent;
