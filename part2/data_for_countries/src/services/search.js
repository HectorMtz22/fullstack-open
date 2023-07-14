import axios from 'axios'

const URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  return axios
    .get(`${URL}/all`)
    .then(res => res.data)
    .then(data => data.map((c) => c.name.common))
}

const getCountry = (name) => {
  return axios
    .get(`${URL}/name/${name}`)
    .then(res => {
      console.log("Data fetched", res.data)
      return res.data
    })
    .then(data => ({
        name: data.name.common,
        area: data.area,
        capital: data.capital[0],
        flag: data.flags,
        languages: Object.values(data.languages),
        location: data.capitalInfo.latlng
    }))
}

export default {
  getAll,
  getCountry
}