import React, { useState, useRef, useEffect } from "react";
import "./style/textarea.scss";

function Textarea(props) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="textarea-wrapper">
      <textarea
        placeholder={props.placeholder}
        className="textarea"
        name={props.name}
        // id="name"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Textarea;
