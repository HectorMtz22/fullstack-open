import PropTypes from "prop-types"
import { Pair } from "./Pair"

export const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = 100 * (good / (good + neutral + bad)) || 0

  if (all === 0) return <p>No feedback given</p>
  return (
    <>
      <Pair title="Good" value={good} />
      <Pair title="Neutral" value={neutral} />
      <Pair title="Bad" value={bad} />
      <Pair title="All" value={all} />
      <Pair title="Average" value={average} />
      <Pair title="Positive" value={positive} finalText="%" />
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
}