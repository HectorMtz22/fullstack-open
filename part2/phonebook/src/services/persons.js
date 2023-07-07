import axios from 'axios'

const URL = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(URL)
    .then(res => {
      console.log({status: res.status, data: res.data})
      return res.data
    })
}

const create = (person) => {
  return axios
    .post(URL, person)
    .then(res => {
      console.log(res.data)
      return res.data
    })
}

export default {getAll, create}
