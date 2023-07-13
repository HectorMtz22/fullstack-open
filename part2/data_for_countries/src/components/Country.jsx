import { useEffect } from "react"
import searchService from '../services/search'

export const Country = ({name}) => {
  useEffect(() => {
    searchService
      .getCountry(name)
      .then(country => console.log(country))

  })
  return <p>Here is your country {name}</p>
}