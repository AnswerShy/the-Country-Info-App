import { useEffect } from "react";
import "./CountryWidget.css"
import { Link } from "react-router-dom";

export default function CountryWidget({name, code, flag}) {
    useEffect(() => {
        document.querySelectorAll('.CountryWidgetInList').forEach(item => {
            item.addEventListener('mouseenter', function() {
                const flagUrl = this.getAttribute('data-flag');
                this.style.setProperty('--flag-url', `url(${flagUrl})`);
            });
        
            item.addEventListener('mouseleave', function() {
                this.style.setProperty('--flag-url', 'none');
            });
        });
    }, [])
    return(
        <Link 
            to={`/Country/${name}/${code}`} 
            className="CountryWidgetInList"
            data-name={name}
            data-flag={flag} 
            data-code={code}
        >
            <div className="CountryWidgetName">{name}({code})</div>
            <img className="CountryWidgetFlag" src={flag}/>
        </Link>
    )
}