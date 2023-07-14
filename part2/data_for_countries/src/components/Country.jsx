import { useEffect } from "react"
import searchService from '../services/search'

// interface country
/*
  {
    name: String,
    capital: String,
    area, Int,
    languages: String[],
    flag: {
      svg: String,
      png: String,
      alt: String
    } 
  }
*/

export const Country = ({name}) => {
  useEffect(() => {
    searchService
      .getCountry(name)
      .then(country => console.log(country))

  })
  return (
    <>
      <h2>Name</h2>
      <p>Capital si</p>
      <p>Area si</p>
      <h3>Languages:</h3>
      <ul>
        <li>Si</li>
        <li>Si</li>
      </ul>
    </>
  )
}