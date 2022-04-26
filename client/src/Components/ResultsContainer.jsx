import "../Style/ResultsContainer.css"
import {useEffect} from "react";
import useLogic from "../Logic/SearchBarLogic";

export default function ResultsContainer(){
    const {suggestions} = useLogic()

    useEffect(() => {}, [suggestions])
    return (
        <div className="results-container" >
            {(suggestions && suggestions.length !== 0) && <p>The relevant jobs are:</p>}
            {suggestions?.map(suggestion => (
                <p key={suggestion.id} >{suggestion.text}</p> ))}
        </div>
    )
}
