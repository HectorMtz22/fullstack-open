import PropTypes from "prop-types"
import { Pair } from "./Pair"

export const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <Pair title="Good" value={good} />
      <Pair title="Neutral" value={neutral} />
      <Pair title="Bad" value={bad} />
      <p>All {good + neutral + bad}</p>
      <p>Average {(good - bad) / (good + neutral + bad) || 0}</p>
      <p>Positive {100 * (good / (good + neutral + bad)) || 0} %</p>
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
}