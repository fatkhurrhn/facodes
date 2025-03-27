import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function Editors({ displayName, language, value, onChange }) {
  const handleChange = (newValue) => {
    onChange(newValue);
  };

  const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen(!open)} type="button">
          {open ? "Minimize" : "Expand"}
        </button>
      </div>
      <Editor
        height="300px"
        theme="vs-dark"
        language={language}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Editors;
