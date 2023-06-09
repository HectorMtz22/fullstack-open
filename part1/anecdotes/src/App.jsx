import { useEffect, useState} from 'react'
import { Anecdote } from './components/Anecdote'
import { AnecdoteMostVotes } from './components/AnecdoteMostVotes'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // Re-render 1 time only because its a constant
  // Either include a useMemo for variable, or use a state for anecdotes
  useEffect(() => {
    const newArray = new Array(anecdotes.length).fill(0)
    setVotes(newArray)
    console.log(newArray);
  }, [])


  const handleNextAnecdote = () => {
    const nextRandomNumber = Math.floor(Math.random() * anecdotes.length)
    console.log("Total data", anecdotes.length)
    console.log("Index selected", nextRandomNumber)
    setSelected(nextRandomNumber)
  }

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  if (votes.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Anecdote for the day</h1>
      <Anecdote
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h2>Anecdote with most votes</h2>
      <AnecdoteMostVotes 
        anecdotes={anecdotes}
        votes={votes}
      />
    </>
  )
}

export default App