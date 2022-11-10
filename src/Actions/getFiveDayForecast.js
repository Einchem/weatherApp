const APIKE = 'A9WvuJuNKX26rWMLTCKXKVqrDrJ8J2jd'
export default function getFiveDayForecast(cityKey) {
    return fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${APIKE}`, {
        headers: {}
    })

}
