import axios from 'axios';

const API_KEY = 'c2813c395611c05bbbf0bfdf8b3fe502';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = ROOT_URL + '&q=' + city + ',fin';
    const request = axios.get(url);

    console.log('request', request);
    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}
