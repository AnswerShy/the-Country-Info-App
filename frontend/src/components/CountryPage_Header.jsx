export default function CountryPage_Header({name, flag}) {
    return (
        <span className="ContryInfoHeader">
            <p className="ContryInfoHeader-name">{name}</p>
            <img className="ContryInfoHeader-flag" src={flag}/>
        </span>
    )
}