import React from "react";
import ReactDOM from "react-dom";
import '../src/App.css'

const quoteData = [
    {text: `"Dont change passion for glory."`, author: "Riccardo Limiti"},
    {text: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`, author: "Nelson Mandela"},
    {text: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. "`, author: "Steve Jobs"},
    {text: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`, author:"James Cameron"},
    {text: `"Life is what happens when you're busy making other plans."`, author: "John Lennon"},
    {text: `"I can accept failure, everyone fails at something. But I can't accept not trying."`, author: "Michael Jordan"},
    {text : `"Some people feel the rain. Others just get wet."`, author: "Bob Marley"},
    {text: `"I won't be a rock star. I will be a legend."`, author: "Freddie Mercury"},
    {text: `"Techno wasn´t designed to be dance music. It was designed to be a futurist statement."`, author:"Jeff Mills"},
    {text:`"Shoes are boring... Wear Sneakers!"`, author: "CONVERSE"}
];

const colors = [
    'purple', 'blueviolet', 'cadetblue', 'darkcyan', 'darkslateblue', 'indigo', 'rebeccapurple', 'darkgoldenrod', 'darkred'
];
const random_color = colors[Math.floor(Math.random() * colors.length)];

const QuoteBox = ({ quote, handleNewQuote }) => (
<div id="quote-box" style={{background: random_color}}> 
    <p id="text">{quote.text}</p>
    <h2>{quote.author}</h2>
    <div className="actions">
        <button id="new-quote" className="button" onClick={handleNewQuote}>New Quote!</button>
        <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">Tweet!</a>
  
    </div>
    <br />      
    <a className="author" href="https://www.freecodecamp.org/riccardolimiti" target="_blank" > Riccardo Limiti &copy; 2021 </a>
</div>
);

const getRandomIndex = () => 
Math.round(Math.random() * ((quoteData.length-1) -0) +0);

const App = () => {
    const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
    const handleNewQuote = () => {
        setQuote(quoteData[getRandomIndex()])
    }

return (
    <div className="main">
<QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
    </div>
)
};
ReactDOM.render(<App />, document.querySelector('#app'));