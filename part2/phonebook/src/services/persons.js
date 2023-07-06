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

export default {getAll}
