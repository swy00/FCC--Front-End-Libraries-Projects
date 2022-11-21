function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#2c3e50");

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setQuotes(data);
            setRandomQuote(data[Math.floor(Math.random() * data.length)]);
        }
    fetchData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };
    
    return (
        <div style={{ backgroundColor: color, minHeight: "100vh" }}>
            <div id="wrapper" className="container" >
                <div id="quote-box" className="card">
                    <div className="card-body text-center">
                        {/*Si hay una randomQuote, genera el contenido, si no, muestra el cartel de loading */}
                        {randomQuote ? (
                        <>
                        <span id="text" className="text" style={{ color: color , fontSize: "1.70em"}}> <i className="fa fa-quote-left"> </i> {randomQuote.text} <i className="fa fa-quote-right"> </i> </span>
                        <p id="author" className="autor" style={{ color: color}}> - {randomQuote.author || "No author"}</p>
                        </>
                        ) : (
                        <h2>Loading</h2>
                        )}
                        <div id="buttons" className="buttons" >
                            <a id="tweet-quote" className="btn button" style={{backgroundColor: color }} href={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    encodeURIComponent(
                      '"' + randomQuote.text + '" ' + randomQuote.author
                    )
                  }
                  target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a id="tumblr-btn" className="btn button" style={{backgroundColor: color }} href={
                    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                    encodeURIComponent(randomQuote.author) +
                    "&content=" +
                    encodeURIComponent(randomQuote.text) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                  }
                  target="_blank">
                                <i className="fa fa-tumblr"></i>
                            </a>
                            <button id="new-quote" onClick={getNewQuote} className="btn button" style={{backgroundColor: color , color: "#fff" }}>New quote</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById("app"));