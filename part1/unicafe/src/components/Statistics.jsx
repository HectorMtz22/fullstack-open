import PropTypes from "prop-types"
import { StatisticLine } from "./StatisticLine"

export const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = 100 * (good / (good + neutral + bad)) || 0

  if (all === 0) return <p>No feedback given</p>
  return (
    <>
      <StatisticLine title="Good" value={good} />
      <StatisticLine title="Neutral" value={neutral} />
      <StatisticLine title="Bad" value={bad} />
      <StatisticLine title="All" value={all} />
      <StatisticLine title="Average" value={average} />
      <StatisticLine title="Positive" value={positive} finalText="%" />
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
}