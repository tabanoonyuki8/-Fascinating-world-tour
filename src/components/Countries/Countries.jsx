import {  useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries,setCountries]=useState([]); //set countries
    const [visitedCountries,setVisitedCountries]=useState([]); //visited countries useState
    const handleVisitedCountry=(country)=>{ //handle mark visit
        
            // console.log(country);
            const newVisitedCountry =[...visitedCountries,country];//push array not working so that I am using copy array the add new one
            setVisitedCountries(newVisitedCountry); //set visited country

    }
    useEffect(()=>{ //main country added
        fetch("https://restcountries.com/v3.1/all")
        .then (res => res.json())
        .then (data => setCountries(data))
    },[])
    return (
       
        <div >
                <h3>Countries: {countries.length}</h3>
            <div>
            <h4>Visited countries:{visitedCountries.length}</h4> 
            <ul>
                {
                    visitedCountries.map(country => //map for every contry lisited 
                        <li key={country.ccn3}>{country.name.common}</li>
                    )
                }
            </ul>
            </div>

           <div className="country-container">
           {
            countries.map(country => <Country key={country.ccn3}//this map for show all countries
                handleVisitedCountry={handleVisitedCountry}
            country={country}></Country>)
           }
           </div>
            </div>
    );
};

export default Countries;