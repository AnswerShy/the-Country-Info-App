import { Link } from "react-router-dom";

export default function CountryPage_BorderCountries({borderlist, name}) {
    if(!borderlist) {
        return <div className="CountryBorderName">Any borders</div>
    }
    if(borderlist.length < 1) {
        return <div className="CountryBorderName">Any borders</div>
    }
    return(
        <section className="CountriesBorder">
            <span> list of countries that border the {name}</span>
            {
                borderlist.map((el, index) => (
                    <Link key={index} to={`/Country/${el.commonName}/${el.countryCode}`} className="CountryBorderInList">
                        <div className="CountryBorderName">{el.commonName}</div>
                    </Link>
                ))
            }
        </section>
    )
}