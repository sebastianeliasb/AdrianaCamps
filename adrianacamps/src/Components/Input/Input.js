import { useState } from "react";
import "./style/input.scss";

import React from "react";

function Input(props) {
  return (
    <div className="form__group field">
      <input
        type="input"
        className={`form__field ${props.size && `form__field--${props.size}`}`}
        placeholder={props.placeholder}
        name={props.name}
        // id="name"
        required
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor="name" className="form__label">
        {props.label}
      </label>
    </div>
  );
}

export default Input;
