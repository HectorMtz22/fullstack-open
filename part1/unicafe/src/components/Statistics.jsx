import PropTypes from "prop-types"
import { Pair } from "./Pair"

export const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = 100 * (good / (good + neutral + bad)) || 0
  return (
    <>
      <Pair title="Good" value={good} />
      <Pair title="Neutral" value={neutral} />
      <Pair title="Bad" value={bad} />
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
}