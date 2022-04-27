import useLogic from "../Logic/AppLogic";
import "../Style/SearchBarCotanier.css";



export default function SearchBarContainer() {
    const {onClick, onChange, search, filteredTitles,onSuggestionClick} = useLogic()
    return (
        <div>
        <div className="search-bar-container">
            <div className="search-container">
             <input label="Search input" className="search-bar"
              onChange={onChange}
              value={search}
               defaultValue={search} placeholder="Search for jobs"
              />
             {filteredTitles && filteredTitles.length >0 &&( <div className="suggestions-container">
               
              {
                filteredTitles.map(title=><span key={title.jobTitleId}
                   data-id={title.jobTitleId} 
                   onClick={onSuggestionClick}
                   data-name={title.jobTitleName}>{title.jobTitleName}</span>)
              }
              </div>)}
            </div>
            <button className="search-bar-button"
            onClick={onClick}
            >Search</button>
        </div>
        </div>
    )
}
