import React, { useEffect, useState } from "react";
import Editor from "../Components/Editor";
import useLocalStorage from "../hooks/useLocalStorage";

const App = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJS] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${js}</script>
          </html>
        `);
    }, 250);

    return () => clearTimeout(timeout)

  }, [html, css, js]);

  return (
    <div>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          value={js}
          onChange={setJS}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={ srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
