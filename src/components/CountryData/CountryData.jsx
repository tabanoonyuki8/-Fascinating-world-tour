

const CountryData = (props) => {
    const {country,handleVisitedCountry}=props;
    return (
        <div>
            <h3>Contry data:{country?.name?.common}</h3>
        </div>
    );
};

export default CountryData;