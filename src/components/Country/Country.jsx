
import './Country.css'
const Country = ({ country }) => {
   

    return (
        <div className='country'>
            <h3>Name:{country?.name?.common} </h3>
            <img src={country?.flags?.png} alt="" />
            <h4>Population: {country?.population}</h4>
            <p>Area: {country?.area}</p>
            <p><small>Code: {country?.cca3}</small></p>
        </div>
       
    );
};

export default Country;