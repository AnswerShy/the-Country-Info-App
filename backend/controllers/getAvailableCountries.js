const getAvailableCountries = async (req, res) => 
{
    const countries = await allCountries()
    const answer = {"data": countries} 

    res.json(answer)
}
export default getAvailableCountries

const allCountries = async () => 
{
    return fetch("https://date.nager.at/api/v3/AvailableCountries")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(async data => {
        const promise = await Promise.all(
            data.map(async el => {
                const flag = await flagDetect(el.name)
                return { "countryCode": el.countryCode, "name": el.name, "flag": flag }
            })
        )
        return promise
    })
    .catch(error => {
        throw new Error(error)
    })
}
const flagDetect = (country) => 
{   
    return fetch("https://countriesnow.space/api/v0.1/countries/flag/images", {
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
}