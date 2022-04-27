import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash"
import SuggestionsContext from "../Context/SuggestionsContext";

export default function useLogic() {
    const [search, setSearch] = useState("")
    const {titles, jobs, setSuggestions, suggestions} = useContext(SuggestionsContext)

    async function onChange(e) {
        const value = e.target.value
        if(value.length === 0) {
            setSearch(value)
            return
        }
        if(value.length >= 2){
            const debouncedSave = debounce(() => setSearch(value), 400);
            debouncedSave();
        }
    }

    async function onClick(e, eventType) {
        if(eventType === 'selectOption'){
            setSearch(e.target.innerText)
            filterSuggestions(e.target.innerText)
        } else {
            if(search <= 2) return
            filterSuggestions(search)
        }
    }

    function filterSuggestions(str) {
        const newSuggestions = []
        const titlesList = []
        const searthLowerCase = str.toLowerCase()
        titles.map(job => {if (job.jobTitleName.toLowerCase().includes(searthLowerCase)) titlesList.push(job) })
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




    useEffect(() => {
        if(search.length < 2) setSuggestions(null)
    }, [search])


    return {
        onChange,
        onClick,
        suggestions,
        titles,
        search
    }
}
