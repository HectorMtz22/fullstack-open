import { useEffect, useState } from 'react'
import weatherServices from '../services/weather'

export const Weather = ({location}) => {
  const [name, setName] = useState(null)
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
  useEffect(() => {
    weatherServices
      .getWeather(location)
      .then(({temp, wind, name}) => {
        setName(name)
        setTemp(temp)
        setWind(wind)
      })

  }, [location])
  return (
    <>
      <h2>Weather in {name}</h2>
      <p>Temperature {temp} Celcius</p>
      <p>Wind {wind} m/s</p>
    </>
  ) 
}