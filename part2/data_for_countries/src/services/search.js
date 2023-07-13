import axios from 'axios'

const URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
  return axios
    .get(`${URL}/all`)
    .then(res => res.data)
    .then(data => data.map((c) => c.name.common))
}

export default {
  getAll
}