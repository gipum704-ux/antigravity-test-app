const { useState, useEffect } = React;

const quotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Success is not final; failure is not fatal: it is the courage to continue that counts.", author: "Winston S. Churchill" }
];

const App = () => {
    const [quote, setQuote] = useState(quotes[0]);
    const [fade, setFade] = useState(true);

    const getRandomQuote = () => {
        setFade(false);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
            setFade(true);
        }, 300);
    };

    return (
        <div className="container" style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease' }}>
            <div className="card-id">MC. 2026.03.02</div>
            <div className="card-logo">QUOTE GEN</div>

            <div className="quote-box">
                <div className="quote-text">"{quote.text}"</div>
                <div className="quote-author">— {quote.author}</div>
            </div>

            <button className="new-quote-btn" onClick={getRandomQuote}>
                New Quote
            </button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
