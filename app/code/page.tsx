"use client";

import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");

  const onChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className="p-4">
      <CodeMirror
        value={code}
        height="400px"
        theme={dracula}
        extensions={[javascript()]}
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
