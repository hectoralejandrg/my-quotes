import { useState } from "react";
import ContainerButton from "./ContainerButton"
import ContainerQuotes from "./ContainerQuotes"
import quotes from "./quotes";

const QuoteBox = ()=>{
    const quo = quotes;
    const getRandom = ()=>{
        return Math.floor(Math.random() * (quo.quotes.length));
    }
    
    const [ quote, setQuote] = useState(quo.quotes[getRandom()]);

    const handleQuote=()=> {
        setQuote(quo.quotes[getRandom()])
    }

    return <div className="container">
        <ContainerQuotes quote={quote.quote} author={quote.author}></ContainerQuotes>
        <ContainerButton handle={handleQuote}></ContainerButton>
    </div>
}

export default QuoteBox;