import React from "react";

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
