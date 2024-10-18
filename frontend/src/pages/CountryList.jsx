import { useEffect, useState } from "react"
import CountryWidget from "../components/CountryWidget"
import "./CountryList.css"

export default function CountryList() {
    const [countryListInfo, setCountryList] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/getAvailableCountries`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.status)
                }
                return response.json()
            })
            .then(data => {
                setCountryList(data)
            })
            .catch(error => {
                throw new Error(error)
            })
    }, [])

    var list;

    if(!countryListInfo) {
        console.log("sad")
    }
    else {
        list = countryListInfo.map((element, index) => (
            <CountryWidget key={index} name={element.name} code={element.countryCode}></CountryWidget>
        ))
    }



    return (
        <section className="ListOfCountry">{list}</section>
    )
}