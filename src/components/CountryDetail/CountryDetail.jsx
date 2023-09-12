import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {
    return (
        <div>
            <h4>Country details</h4>
            <hr />
            <CountryData
            {...props}
            // country ={country}
            // handleVisitedCountr={handleVisitedCountry}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;