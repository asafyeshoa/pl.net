import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash"
import SuggestionsContext from "../Context/SuggestionsContext";

export default function useLogic() {
    const [search, setSearch] = useState("")
    const {titles, jobs, setSuggestions, suggestions} = useContext(SuggestionsContext)

    async function onChange(e) {
        if(e.target.value.length >= 2){
            const debouncedSave = debounce(() => setSearch(e.target.value), 400);
            debouncedSave();
        }
    }

    async function onClick() {
        options()
    }

    function options() {
        if(search.length <= 2) {
            setSuggestions(null)
        } else {
            const newSuggestions = []
            const titlesList = []
            titles.map(job => {if (job.jobTitleName.includes(search)) titlesList.push(job) })
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

    }


    useEffect(() => {
        options()
    }, [search])


    return {
        onChange,
        onClick,
        suggestions
    }
}
