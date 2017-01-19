import axios from 'axios';
const API_KEY = "b023ec94c80b285416b1d1be93805bfc";
const ROOTURL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city){
    const url =  `${ROOTURL}&q=${city},in`;

    let result = axios.get(url);
    return {
        type : FETCH_WEATHER,
        payload : result
    } 

}  