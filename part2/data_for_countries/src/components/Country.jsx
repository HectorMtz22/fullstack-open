import { useEffect, useState } from "react"
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
  const [country, setCountry] = useState(null)
  useEffect(() => {
    searchService
      .getCountry(name)
      .then(data => {
        console.log(data)
        setCountry(data)
      })
  }, [name])

  if (!country) return <p>Loading info...</p> 
  return (
    <>
      <h2>{country.name}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <picture>
        <source srcSet={country.flag.svg} type="image/svg+xml" />
        <source srcSet={country.flag.png} type="image/png" />
        <img src={country.flag.png} alt={country.flag.alt} width={480} />
      </picture>
    </>
  )
}