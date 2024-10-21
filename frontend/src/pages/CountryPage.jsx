import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import CountryPage_Header from "../components/CountryPage_Header"
import CountryPage_BorderCountries from "../components/CountryPage_BorderCountries"
import CountryPage_Population from "../components/CountryPage_Population"
import "./CountryPage.css"

export default function CountryPage() {
    const { country, code } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/getCountryInfo?code=${code}&country=${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                setCountryInfo(data);
            })
            .catch(error => {
                console.error("Error fetching country info:", error);
            });
    }, [country, code]);

    return (
        <>
            {countryInfo ? (<>
                <CountryPage_Header name={country} flag={countryInfo.flag} />
                <CountryPage_BorderCountries name={country} borderlist={countryInfo.borders} />
                {console.log(countryInfo)}
                {Array.isArray(countryInfo.population) ? (<CountryPage_Population data={countryInfo.population}/>) : (<span className="ContryInfoHeader">{countryInfo.population}</span>)}
            </>) : (<p>Loading...</p> )}
        </>
    );
}