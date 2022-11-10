
const APIKEY = 'A9WvuJuNKX26rWMLTCKXKVqrDrJ8J2jd'
export default function searchCity(searchValue) {
    return fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${searchValue}`,{
        headers: {}
    })

}