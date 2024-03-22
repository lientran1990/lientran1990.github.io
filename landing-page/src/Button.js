import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function ButtonComponent(props) {
  return (
    <div>
      <button className={props.className} type="button">
        {props.children}
      </button>
    </div>
  );
}

export default ButtonComponent;
