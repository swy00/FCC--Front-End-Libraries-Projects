marked.setOptions({
    breaks: true,
  });
  
  // INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

function App(){

    const [text,setText]= React.useState(placeholder)



    return(
        <div className="container">
            <div className="input">
                <h1>EDITOR</h1>
                <textarea placeholder= "Write whatever you want" onChange={(e)=>setText(e.target.value)} className="textarea" id="text" rows="10" value={text} ></textarea>
            </div>
            <div className="output">
                <h3 className="text-center">PREVIEWER</h3>
                <Preview markdown={text} />
            </div>
        </div>
    )
}

function Preview ({ markdown }){

    return(
        <div
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer })
        }}
        id="preview"
      />
    )
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And if course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

ReactDOM.render(<App />, document.getElementById('app'))