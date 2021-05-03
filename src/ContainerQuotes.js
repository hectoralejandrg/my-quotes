import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const ContainerQuotes = ({quote, author})=>{
    return <div>
        <p><FontAwesomeIcon icon={faQuoteLeft} size="2x"/> {quote}</p>
        <p className="text-align-right">- {author}</p>
    </div>
}

export default ContainerQuotes;