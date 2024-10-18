const getAvailableCountries = async (req, res) => {
    fetch("https://date.nager.at/api/v3/AvailableCountries")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        return response.json();
    })
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        throw new Error(error)
    })
}
export default getAvailableCountries