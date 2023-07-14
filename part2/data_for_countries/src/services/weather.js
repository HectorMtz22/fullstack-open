import axios from 'axios'


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`


const getWeather = ([lat, lon]) => { 
  console.log(lat, lon)
  console.log(API_KEY)
  return axios
    .get(URL(lat, lon))
    .then(res => res.data)
    .then(data => {
      console.log(data)
      return {
        temp: data.main.temp,
        wind: data.wind.speed,
        name: data.name
      }
    })

}

export default {
  getWeather
}