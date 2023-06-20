import { useState } from 'react'
import { Button } from './components/Button'
import { Pair } from './components/Pair'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button title="Good" action={() => setGood(good + 1)} />
      <Button title="Neutral" action={() => setNeutral(neutral + 1)} />
      <Button title="Bad" action={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Pair title="Good" value={good} />
      <Pair title="Neutral" value={neutral} />
      <Pair title="Bad" value={bad} />
    </div>
  )
}

export default App