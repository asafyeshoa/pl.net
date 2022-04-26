import SearchBarContainer from "../Components/SearchBarContainer"
import ResultsContainer from "../Components/ResultsContainer";


import "../Style/Main.css"

export default function Main() {

    return (
        <div className="main-container" >
            <SearchBarContainer/>
            <ResultsContainer/>
        </div>
    )
}
