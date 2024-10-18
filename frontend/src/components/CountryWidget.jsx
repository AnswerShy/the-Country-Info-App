import "./CountryWidget.css"
import { Link } from "react-router-dom";

export default function CountryWidget({name, code}) {
    return(
        <Link to={`/Country/${name}/${code}`} className="CountryWidgetInList">
            <div className="CountryWidgetName">{name}</div>
            <div className="CountryWidgetCode">{code}</div>
        </Link>
    )
}