import PropTypes from 'prop-types'
import { Country } from './Country'

export const ListCountries = ({names, search}) => {
  if (!names) return null
  const matchedCountries = names.filter((x) => x.includes(search))
  console.log("Matched Countries", matchedCountries)

  if (matchedCountries.length === 0) return <p>There are not countries found. Try again</p> 

  if (matchedCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (matchedCountries.length > 1) {
    return matchedCountries.map((country) => (
      <p key={country}>{country}</p>
    ))
  } else {
    return <Country name={matchedCountries[0]}/>
  }

}

ListCountries.propTypes = {
  names: PropTypes.array,
  search: PropTypes.string.isRequired 
}