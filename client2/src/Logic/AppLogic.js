import {useContext} from "react";
import SuggestionsContext from "../Context/SuggestionsContext";

export default function useLogic() {
    const {titles, jobs, setSuggestions, suggestions,search, setSearch} = useContext(SuggestionsContext)

    async function onChange(e) {
        setSearch(e.target.value);
    }

    async function onClick() {
        if(search < 2) return
        filterSuggestions(search)
    }
    function filterTitles() {
       return search.length < 2 ? [] : titles.filter(({jobTitleName})=>jobTitleName?.toLowerCase().startsWith(search.toLowerCase()))
    }
    

    function filterSuggestions() {
        const newSuggestions = []
        const titlesList = filterTitles()
        titlesList.forEach(suggestion => {
            jobs.forEach(job => {
                if(suggestion.jobTitleId === job.jobTitleId){
                    const obj = {}
                    obj.text = `${suggestion.jobTitleName} in ${job.city}, ${job.state}`
                    obj.id = job.jobId
                    newSuggestions.push(obj)
                }
            })
        })
        setSuggestions(newSuggestions)
    }

    function onSuggestionClick(e) {
        setSearch(e.target.innerText)
        onClick()
    }
    const filteredTitles = filterTitles()

    return {
        onChange,
        onClick,
        suggestions,
        titles,
        search,
        filterTitles,
        setSearch,
        filteredTitles,
        onSuggestionClick
    }
}
