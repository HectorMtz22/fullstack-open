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

const update = (id, person) => {
  console.log("Update Parameter", person)
  return axios
    .put(`${URL}/${id}`, person)
    .then(res => res.data)
}

const remove = (id) => {
  return axios
    .delete(`${URL}/${id}`)
    .then(res => res.data)
}

export default {getAll, create, remove, update}
