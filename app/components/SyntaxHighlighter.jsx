"use client";

import Prism from "prismjs";

import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

// include line numbers and line highlights plugin,
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";

// include css for line numbers and highlights
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

// import theme
// import "prismjs/themes/prism-tomorrow.min.css";
// import "prism-themes/themes/prism-vsc-dark-plus.css";
import "prism-themes/themes/prism-dracula.css";
// import "prism-themes/themes/prism-atom-dark.css";
// import "prism-themes/themes/prism-material-dark.css";

import { useEffect, useRef } from "react";

const SyntaxHighlighter = ({
  // showlineNumbers = true,
  language,
  code,
  lineHighlights,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      // highlight this specific component only.
      // ! Do not use Prism.highlightAll().
      Prism.highlightAllUnder(ref.current);
    }
  }, []);

  return (
    <div ref={ref}>
      <pre
        className={`line-numbers language-${language}`}
        data-line={lineHighlights?.join(",")}
      >
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default SyntaxHighlighter;
