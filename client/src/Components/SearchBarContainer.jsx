import TextField from '@mui/material/TextField';
import useLogic from "../Logic/SearchBarLogic";
import "../Style/SearchBarCotanier.css";

export default function SearchBarContainer() {
    const {onClick, onChange} = useLogic()
    return (
        <div className="search-bar-container">
            <TextField label="Enter a job title" variant="outlined" className="search-bar" onChange={onChange}/>
            <button className="search-bar-button" onClick={onClick}>Search</button>
        </div>
    )
}
