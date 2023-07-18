import React, { useState, useRef, useEffect } from "react";
import "./style/textarea.scss";

function Textarea(props) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  // useEffect(() => {
  //   if (textareaRef.current) {
  //     textareaRef.current.style.height = "auto";
  //     textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  //   }
  // }, [text, props.value]);

  function handleChange(event) {
    setText(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const textarea = event.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      textarea.selectionStart = start + 2;
      textarea.selectionEnd = start + 2;
      const newValue = value.substring(0, start) + "* " + value.substring(end);
      textarea.value = newValue;
      setText(newValue);
      // textarea.style.height = "auto";
      // textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
  return (
    <div className="textarea-wrapper">
      <textarea
        placeholder={props.placeholder}
        className="textarea"
        name={props.name}
        // id="name"
        onKeyDown={handleKeyDown}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Textarea;
