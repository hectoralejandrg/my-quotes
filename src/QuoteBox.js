import { useState } from "react";
import Colors from "./Colors";
import ContainerButton from "./ContainerButton"
import ContainerQuotes from "./ContainerQuotes"
import quotes from "./quotes";

const QuoteBox = ()=>{
    const quo = quotes;
    const colors = Colors;
    const getRandom = ()=>{
        return Math.floor(Math.random() * (quo.quotes.length));
    }
    const getColor =()=>{
        return document.documentElement.style.setProperty('--main-color', colors[Math.floor(Math.random() * (colors.length))].hex);
    }
    
    const [ quote, setQuote] = useState(quo.quotes[getRandom()]);
    const [ color, setColor] = useState(getColor())

    const handleQuote=()=> {
        setQuote(quo.quotes[getRandom()])
        setColor(getColor)    
    }

    return <div className="container">
        <ContainerQuotes quote={quote.quote} author={quote.author}></ContainerQuotes>
        <ContainerButton handle={handleQuote}></ContainerButton>
    </div>
}

export default QuoteBox;