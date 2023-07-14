import { useEffect, useState } from 'react'
import weatherServices from '../services/weather'

export const Weather = ({location}) => {
  const [name, setName] = useState(null)
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
  const [icon, setIcon] = useState(null)
  const [image, setImage] = useState(null)
  useEffect(() => {
    weatherServices
      .getWeather(location)
      .then(({temp, wind, name, icon}) => {
        setName(name)
        setTemp(temp)
        setWind(wind)
        setIcon(icon)
      })

  }, [location])

  if (!name) return null
  return (
    <>
      <h2>Weather in {name}</h2>
      <p>Temperature {temp} Celcius</p>
      <img src={weatherServices.getImage(icon?.icon)} alt={icon?.description} />
      <p>Wind {wind} m/s</p>
    </>
  ) 
}