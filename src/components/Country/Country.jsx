
import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry}) => {
   
const [visited,setVisited]=useState(false);
const handleVisited =()=>{
    setVisited(!visited);
}
const passWithParam=()=>{
    handleVisitedCountry(country);
}

    return (
        <div className={`country ${visited && 'visited'}` }>
            <h3>Name:{country?.name?.common} </h3>
            <img src={country?.flags?.png} alt="" />
            <h4>Population: {country?.population}</h4>
            <p>Area: {country?.area}</p>
            <p><small>Code: {country?.cca3}</small></p>
            <button onClick={passWithParam}>Mark visited</button>
            < br />
            <button onClick={handleVisited}>{visited ?"Visited" : "Going"}</button>
            {
                visited ? "I have visited this country " : 
                
                
                "I want to visit"
            }
        </div>
       
    );
};

export default Country;