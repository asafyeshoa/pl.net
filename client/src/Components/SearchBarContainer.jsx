import TextField from '@mui/material/TextField';
import useLogic from "../Logic/AppLogic";
import Autocomplete from '@mui/material/Autocomplete';
import "../Style/SearchBarCotanier.css";



export default function SearchBarContainer() {
    const {onClick, onChange, titles} = useLogic()
    return (
        <div className="search-bar-container">
        <Autocomplete
         className="search-bar"
         freeSolo
         onClose={(event, eventType) => onClick(event, eventType) }
         disableClearable
          options={titles.map((option) => option.jobTitleName)}
         renderInput={(params) => (
          <TextField
          onChange={onChange}
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search' }} /> )}
    />
            <button className="search-bar-button" onClick={onClick}  >Search</button>
        </div>
    )
}
