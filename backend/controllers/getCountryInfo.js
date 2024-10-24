const getCounrtyInfo = async (req, res) => {
    const country = req.query.country
    const code = req.query.code

    const answer = {"borders": await bordersFind(code), "population": await populationFind(country), "flag": await flagFind(country)}
    res.json(answer)
}

export default getCounrtyInfo

const bordersFind = (code) => fetch(`https://date.nager.at/api/v3/CountryInfo/${code}`)
    .then(response => {
        if (!response.ok) {
            return new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if(data.borders) {
            return data.borders
        }   
        else {
            return "not found"
        }
    })
    .catch(error => {
        return new Error(error)
    })

const populationFind = (country) => fetch(`https://countriesnow.space/api/v0.1/countries/population`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "country": country }), 
    })
    .then(response => {
        if (!response.ok) {
            return new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if(data.data.populationCounts) {
            return data.data.populationCounts
        }
    })
    .catch(error => {
        if(country === "Russia") {
            return `Any gnidas was not found`
        }
        return `Any info about this country ${error}`
    })

const flagFind = (country) => fetch("https://countriesnow.space/api/v0.1/countries/flag/images", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ "country": country })
    })
    .then(response => {
        if (!response.ok) {
            return new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        if(data.data.flag) {
            return data.data.flag
        } 
    })
    .catch(error => {
        return "https://upload.wikimedia.org/wikipedia/commons/3/3a/Unknown.svg"
    })
