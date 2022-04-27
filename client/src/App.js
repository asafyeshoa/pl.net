import Main from "./Pages/Main"
import './Style/App.css';
import SuggestionsContext from "./Context/SuggestionsContext";
import {useEffect, useState} from 'react'
import axios from "axios";

function App() {
    const [titles, setTitles] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [suggestions, setSuggestions] = useState(null);

    useEffect( () => {

        var config = {
            method: 'get',
            url: '/api/jobsTitles',
          };
          
          axios(config)
          .then(function (response) {
            setTitles(response.data.testJobTitles);
            setJobs(response.data.testJobs)
          })
          .catch(function (error) {
            console.log(error);
          });
  
    },[])

    return (
        <div className="App">
            <SuggestionsContext.Provider value={{titles, setTitles, jobs, setJobs, suggestions, setSuggestions}}>
                <Main/>
            </SuggestionsContext.Provider>
        </div>
    );
}

export default App;
