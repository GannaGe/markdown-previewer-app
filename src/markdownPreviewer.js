import { React, useState } from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

marked.setOptions({
  breaks: true,
});

function MarkdownPreviewer() {
  const defaultText = `# Welcome to Markdown Previewer!
  
    ## This is a subheading
    [Click me to visit GitHub](https://github.com)
    
    \`inline code example\`
    
    \`\`\`
    // Code block example
    function sayHello() {
      return "Hello, world!";
    }
    \`\`\`
    
    - List item 1
    - List item 2
    
    > A blockquote example
    
    ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
    
    **Bold text**`;

  const [markdown, setMarkdown] = useState(defaultText);

  const renderMarkdown = () => {
    return { __html: marked.parse(markdown) };
  };

  return (
    <div className="app-container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="wraper">
        <div className="editor">
          <h2 className="editor-header">Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          />
        </div>
        <div className="previewer">
          <h2 className="previewer-header">Previewer</h2>
          <div id="preview" dangerouslySetInnerHTML={renderMarkdown()}></div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer;
