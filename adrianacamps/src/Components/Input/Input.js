import { useState } from "react";
import "./style/input.scss";

import React from "react";

function Input(props) {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="form__group field">
      <input
        type="input"
        className={`form__field ${props.size && `form__field--${props.size}`}`}
        placeholder={props.placeholder}
        name={props.label}
        // id="name"
        required
        value={name}
        onChange={handleInputChange}
      />
      <label htmlFor="name" className="form__label">
        {props.label}
      </label>
    </div>
  );
}

export default Input;
