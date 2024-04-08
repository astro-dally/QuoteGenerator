import React, { useState } from "react";

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        id: 1
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        id: 2
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        id: 3
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        id: 4
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        id: 5
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        id: 6
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        id: 7
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        id: 8
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        id: 9
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        id: 10
    }
];

function QuoteGenerator() {
    const [quote, setQuote] = useState([quotes[Math.floor(Math.random() * quotes.length)]]);

    function nextQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote([...quote, quotes[randomIndex]]);
    }

    return (
        <>
            <h1>Generate Your Quote.</h1>
                {quote.map((quote, index)=>{
                    return (
                        
                            <p key={quote.id}>{quote.quote}</p>
                        
                    )
                })}
            
            <button onClick={nextQuote}>Next Quote</button>
        </>
    );   
}
export default QuoteGenerator;